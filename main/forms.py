from flask_wtf import FlaskForm
from wtforms.fields.html5 import EmailField,URLField
from wtforms.fields import StringField,PasswordField,SubmitField,BooleanField,TextAreaField,DateField,RadioField,IntegerField,TextField,FileField
from wtforms.validators import Email, EqualTo,Length,InputRequired,Regexp

class JoinForm(FlaskForm):
    name=TextField('姓名',validators=[InputRequired()])
    old_school=TextField('就讀學校',validators=[InputRequired()])
    new_school=TextField('錄取學校',validators=[InputRequired()])
    birth=DateField('生日',validators=[InputRequired()])
    sex=RadioField('性別',validators=[InputRequired()],choices=['男','女'])
    email=EmailField("Email",validators=[InputRequired("此為必填欄目"),Email("請輸入正確的郵箱格式")])
    phone=TextField('手機',validators=[InputRequired()])
    ID=TextField('身分證字號',validators=[InputRequired()])
    parentPhone=TextField('家人手機',validators=[InputRequired()])
    parentID=TextField('家人身分證字號',validators=[InputRequired()])
    parentRelation=TextField('家人關係',validators=[InputRequired()])
    eat=RadioField('葷素',validators=[InputRequired()],choices=['葷','素'])
    sick=TextField('重大疾病')
    file=FileField('家同',validators=[InputRequired()])
    submit=SubmitField('送出')
    