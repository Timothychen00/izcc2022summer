from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField,SelectField,TextField,DateField,FileField,SubmitField
from wtforms.widgets.html5 import EmailInput
from wtforms.validators import InputRequired,email_validator

class JoinForm(FlaskForm):
    name=TextField('姓名',validators=[InputRequired()])
    old_school=TextField('就讀學校',validators=[InputRequired()])
    new_school=TextField('錄取學校',validators=[InputRequired()])
    birth=DateField('生日',validators=[InputRequired()],format='%Y/%m/%d')
    sex=SelectField('性別',validators=[InputRequired()],choices=['男','女'])
    email=EmailInput('郵箱')#
    phone=TextField('手機',validators=[InputRequired()])
    ID=TextField('身分證字號',validators=[InputRequired()])
    parentID=TextField('家人身分證字號',validators=[InputRequired()])
    parentRelation=TextField('家人關係',validators=[InputRequired()])
    eat=SelectField('葷素',validators=[InputRequired()],choices=['葷素'])
    sick=TextField('重大疾病')
    file=FileField('家同')
    submit=SubmitField('送出')
    