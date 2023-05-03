<script setup>
import { ElMessage } from "element-plus";
</script>
<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Имя" prop="name">
      <el-input v-model="form.name" placeholder="Введите имя"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email" placeholder="Введите email"></el-input>
    </el-form-item>
    <el-form-item label="Телефон" prop="phone">
      <el-input v-model="form.phone" placeholder="Введите телефон"></el-input>
    </el-form-item>
    <el-form-item label="Пол" prop="gender">
      <el-select v-model="form.gender" placeholder="Выберите пол">
        <el-option label="Мужской" value="male"></el-option>
        <el-option label="Женский" value="female"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Разрешить уведомления" prop="notifications">
      <el-switch v-model="form.notifications"></el-switch>
    </el-form-item>
    <el-form-item label="Дата рождения" prop="birthday">
      <el-date-picker
        v-model="form.birthday"
        type="date"
        placeholder="Выберите дату рождения"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Отправить</el-button>
      <el-button @click="resetForm">Очистить</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        notifications: false,
        birthday: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("отправить форму");
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$http
            .post("http://localhost:3000/api/application", this.form)
            .then((response) => {
              console.log("Отправлено на сервер: ", response.data);
              ElMessage.success("Данные успешно отправлены на сервер");
              // this.$message.success("Данные успешно отправлены на сервер");
            });
        } else {
          ElMessage.error("Пожалуйста, заполните форму корректно");
          // this.$message.error("Пожалуйста, заполните форму корректно");
        }
      });
    },
    resetForm() {
      console.log("form is clean");
      this.$refs.form.resetFields();
    },
  },
};
</script>
