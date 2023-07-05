from fileinput import filename
import os,pymongo,sys,pandas
from dotenv import load_dotenv
load_dotenv()

client=pymongo.MongoClient("mongodb+srv://admin:"+os.environ['DB_PASSWORD']+"@cluster0.z3vye.mongodb.net/?retryWrites=true&w=majority",tls=True,tlsAllowInvalidCertificates=True)
db = client.izcc_join
collection=db.data
file_collection=db.file

results=collection.find({})
df=pandas.DataFrame([],columns=['姓名',"就讀學校",'尺寸','生日','性別','郵箱','手機','身分證字號','監護人姓名','監護人手機','監護人身分證字號','與監護人關係','葷素','重大疾病'])
for i in results:
    print(i)
    df.loc[len(df.index)]={"姓名":i['name'],"就讀學校":i['old_school'],'尺寸':i['size'],"生日":i['birth'],'性別':i['sex'],'郵箱':i['email'],'手機':i['phone'],'身分證字號':i['ID'],'監護人姓名':i['parentName'],'監護人手機':i['parentPhone'],'監護人身分證字號':i['parentID'],'與監護人關係':i['parentRelation'],'葷素':i['eat'],'重大疾病':i['sick']}
    result=file_collection.find_one({'name':i['name']})
    filename=result['filename']
    data=result['file']
    with open('./download/'+filename,'wb') as f1:
        f1.write(data)

data_filename='12'
# os.remove('12.xlsx')
df.to_excel(data_filename+'.xlsx',encoding='utf-8',index=None)