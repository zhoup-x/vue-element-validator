<template>
    <div class="form">
        <el-form label-width="100px">
            <el-form-item label="姓名:">
                <el-input v-model="form.username" @input="form.username = $validator(form.username,'chinese')" :maxLength="4"  placeholder="请输入姓名(中文,限2-4字)"></el-input>
            </el-form-item>
            <el-form-item label="手机号:">
                <el-input v-model="form.phone" @input="form.phone = $validator(form.phone,'number')" :maxLength="11" placeholder="请输入手机号码(数字,校验，11位)"></el-input>
            </el-form-item>
            <el-form-item label="账号:">
                <el-input v-model="form.account" @input="form.account = $validator(form.account,'account')" :maxLength="16" placeholder="请输入数字或字母(1,2..a,b..)"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="form.password" :maxLength="18" placeholder="(6-18位)"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:">
                <el-input v-model="form.email" placeholder="请输入邮箱(校验)"></el-input>
            </el-form-item>
            <el-form-item label="数量:">
                <el-input v-model="form.count" @input="form.count = $validator(form.count,'number')" :maxLength="3" placeholder="请输入正整数(1,2...最大999)"></el-input>
            </el-form-item>
            <el-form-item label="价格:">
                <el-input v-model="form.price" @input="form.price = $validator(form.price,'float')" placeholder="请输入数字(保留两位小数)"></el-input>
            </el-form-item>
            <el-form-item label="百分比:">
                <el-input v-model="form.pre" placeholder="请输入数字(0-999,保留两位小数)"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default{
        mounted() {
        },
        data(){
            return{
                form:{
                    username: null,
                    phone:null,
                    account:null,
                    password:null,
                    email:null,
                    count:null,
                    price:null,
                    pre:null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form{
        width:400px;
        margin: 0 auto;
    }
</style>
