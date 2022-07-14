import os,pymongo
from dotenv import load_dotenv
load_dotenv()
class DB():
    def __init__(self):
        self.client=pymongo.MongoClient("mongodb+srv://admin:"+os.environ['DB_PASSWORD']+"@cluster0.z3vye.mongodb.net/?retryWrites=true&w=majority",tls=True,tlsAllowInvalidCertificates=True)
        self.join_db=self.client.izcc_join
        self.join_collection=self.join_db.file
        
    def insert_data(self,form):
        pass
        
        
db_model=DB()