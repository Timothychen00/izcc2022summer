import os,pymongo,traceback,requests
from flask import Blueprint, redirect, render_template,request,session,flash
from dotenv import load_dotenv
from main.model import db_model
from main.forms import JoinForm
load_dotenv()


headers = {
    "Authorization": "Bearer " + os.environ['TOKEN'],
    "Content-Type": "application/x-www-form-urlencoded"
}
app_route=Blueprint('izcc',__name__,static_folder='static',template_folder='../templates')

@app_route.route('/')
def home():
    return render_template('index.html')

@app_route.route('/join',methods=['POST',"GET"])
def about():
    try:
        form=JoinForm()
        if form.validate_on_submit():
            if not form.file.data:
                form.file.errors.append('請上傳檔案')
                return render_template('join.html',form=form)
            # print(form.name.name)
            db_model.insert_data(form)
            flash('上傳成功')
            requests.post("https://notify-api.line.me/api/notify",headers=headers, params= {"message":"報名成功："+form.name.data})
            return render_template('join.html',form=form)
            # for i in form:
            #     print(i.label,i.data)
        else:
            for i in form:
                print(i.name,i.errors)
        return render_template('join.html',form=form)
    except Exception:
        requests.post("https://notify-api.line.me/api/notify",headers=headers, params= {"message":traceback.format_exc()})