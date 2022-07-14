import os,pymongo
from dotenv import load_dotenv
from bson.binary import Binary
from werkzeug.utils import secure_filename
load_dotenv()

ALLOWED_EXTENSIONS = { 'pdf', 'png', 'jpg', 'jpeg'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS
class DB():
    def __init__(self):
        self.client=pymongo.MongoClient("mongodb+srv://admin:"+os.environ['DB_PASSWORD']+"@cluster0.z3vye.mongodb.net/?retryWrites=true&w=majority",tls=True,tlsAllowInvalidCertificates=True)
        self.join_db=self.client.izcc_join
        self.join_collection=self.join_db.file
        
    def insert_data(self,form):
        data={}
        for i in form:
            if i.name!='file' and i.name!='submit' and i.name!='csrf_token':
                data[i.name]=i.data
            if i.name=='file':
                file=i.data
                if file and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    print(filename)
                    print(file)
                    file.save(os.path.join('./', filename))
                    with open('./'+filename, "rb") as f:
                        encoded = Binary(f.read())
                        data['file']={'filename':filename,'file':encoded}
                    print(file)
                    os.remove(filename)
        data['birth']=str(data['birth'])
        self.join_collection.insert_one(data)
        print(data)
        
db_model=DB()