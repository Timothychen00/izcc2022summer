import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormInput,
    FormGenderInput,
    FormLabel,
    FormGenderLabel,
    FormWrap,
    FormButton,
    Icon,
    FormGenderWrap,
    FormFileUpload,
    FormFileLabel,
    FormFileWrap,
} from "./SignupElements";

const Signup = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">IZCC</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>報名資料</FormH1>
                        <FormLabel htmlFor="name">姓名</FormLabel>
                        <FormInput id="name" type="text" required />
                        <FormLabel htmlFor="school1">就讀學校</FormLabel>
                        <FormInput id="school1" type="text" required />
                        <FormLabel htmlFor="school2">錄取學校</FormLabel>
                        <FormInput id="school2" type="text" required />
                        <FormLabel htmlFor="birth">生日</FormLabel>
                        <FormInput id="birth" type="date" required />
                        <FormLabel htmlFor="gender">性別</FormLabel>
                        <FormGenderWrap>
                            <FormGenderLabel>男</FormGenderLabel>
                            <FormGenderInput
                                id="birth"
                                type="radio"
                                name="gender"
                                value="male"
                                required
                            />
                            <FormGenderLabel>女</FormGenderLabel>
                            <FormGenderInput
                                id="birth"
                                type="radio"
                                name="gender"
                                value="female"
                                required
                            />
                        </FormGenderWrap>
                        <FormLabel htmlFor="email">信箱</FormLabel>
                        <FormInput
                            id="email"
                            type="text"
                            placeholder="範例 : helloworld@gmail.com"
                            pattern=".+@.+\.com|.+@.+\.tp\.edu\.tw"
                            required
                        />
                        <FormLabel htmlFor="phone">手機號碼</FormLabel>
                        <FormInput
                            id="phone"
                            type="text"
                            pattern="09\d{8}"
                            placeholder="範例 : 0910123123"
                            required
                        />
                        <FormLabel htmlFor="ID">身分證字號</FormLabel>
                        <FormInput
                            id="ID"
                            type="text"
                            pattern="[a-zA-Z][0-9]{9}"
                            required
                        />
                        <FormLabel htmlFor="family-phone">家人手機</FormLabel>
                        <FormInput
                            id="family-phone"
                            type="text"
                            pattern="09\d{8}"
                            placeholder="範例 : 0910123123"
                            required
                        />
                        <FormLabel htmlFor="family-ID">
                            家人身分證字號
                        </FormLabel>
                        <FormInput
                            id="family-ID"
                            type="text"
                            pattern="[a-zA-Z][0-9]{9}"
                            required
                        />
                        <FormLabel htmlFor="relationship">家人關係</FormLabel>
                        <FormInput id="relationship" type="text" required />
                        <FormLabel htmlFor="eating">葷素</FormLabel>
                        <FormGenderWrap>
                            <FormGenderLabel>葷</FormGenderLabel>
                            <FormGenderInput
                                id="eating"
                                type="radio"
                                name="eating"
                                value="meat"
                                required
                            />
                            <FormGenderLabel>素</FormGenderLabel>
                            <FormGenderInput
                                id="birth"
                                type="radio"
                                name="eating"
                                value="vegetarian"
                                required
                            />
                        </FormGenderWrap>
                        <FormLabel htmlFor="disease">重大疾病</FormLabel>
                        <FormInput
                            id="disease"
                            type="text"
                            placeholder="沒有則填無"
                            required
                        />
                        <FormFileWrap>
                            <FormLabel htmlFor="file">家同</FormLabel>
                            <FormFileUpload type="file" id="file-input" />
                            <FormFileLabel htmlFor="file-input">
                                <AiFillFileAdd transform="scale(1.35)" />{" "}
                                &thinsp;選擇檔案
                            </FormFileLabel>
                        </FormFileWrap>
                        <FormButton type="submit">報名</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default Signup;
