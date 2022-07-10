import os,pymongo,sys
from dotenv import load_dotenv
load_dotenv()

client=pymongo.MongoClient("mongodb+srv://admin:"+os.environ['DB_PASSWORD']+"@cluster0.z3vye.mongodb.net/?retryWrites=true&w=majority",tls=True,tlsAllowInvalidCertificates=True)
db = client.izcc_join
collection=db.file

results=collection.find()
for result in results:
    print(result['filename'])
    data=result['file']
    filename=result['filename']
    with open('./download/'+filename,'wb') as f1:
        f1.write(data)

if sys.argv[-1]=='-c':
    collection.delete_many({})