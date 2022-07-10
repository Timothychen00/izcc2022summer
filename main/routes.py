import os
from flask import Blueprint, render_template,request,session,flash
from werkzeug.utils import secure_filename
import pymongo
import base64
import bson
from dotenv import load_dotenv
load_dotenv()
from bson.binary import Binary
ALLOWED_EXTENSIONS = { 'pdf', 'png', 'jpg', 'jpeg'}
app_route=Blueprint('izcc',__name__,static_folder='static',template_folder='../templates')

client=pymongo.MongoClient("mongodb+srv://admin:"+os.environ['DB_PASSWORD']+"@cluster0.z3vye.mongodb.net/?retryWrites=true&w=majority",tls=True,tlsAllowInvalidCertificates=True)
db = client.izcc_join
collection=db.file

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app_route.route('/')
def home():
    return '1'

@app_route.route('/aboutus')
def about():
    return render_template('aboutus.html')


@app_route.route('/classes')
def classes():
    return render_template('classes.html')

@app_route.route('/contact')
def contact():
    return render_template('contact.html')

@app_route.route('/join',methods=['POST',"GET"])
def join():
    if  request.method=='POST':
        file = request.files['file']
        # a=file()
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            print(filename)
            print(file)
            file.save(os.path.join('./', filename))
            with open('./'+filename, "rb") as f:
                encoded = Binary(f.read())
                collection.insert({"filename": filename, "file": encoded, "description": "test" })
            print(file)
            os.remove(filename)
            # file.save(os.path.join('/tmp', filename))
            flash('上傳成功')
        else:
            flash('fuck')
    return render_template('index.html')
