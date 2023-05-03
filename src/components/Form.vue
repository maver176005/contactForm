<template>
  <el-form :model="ruleForm" label-width="120px" label-position="top">
    <el-form-item label="ФИО">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Подразделение">
      <el-select
        v-model="ruleForm.subdivision"
        placeholder="Выберите подразделение компании"
      >
        <el-option label="Programming mobile app" value="mobile" />
        <el-option label="Programming web app" value="web" />
      </el-select>
    </el-form-item>
    <el-form-item label="Свободные даты для интервью" label-width="auto">
      <el-col :span="11">
        <el-date-picker
          v-model="ruleForm.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="ruleForm.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item
      label="Согласие на обработку личных данных"
      label-width="auto"
    >
      <el-switch v-model="ruleForm.agreement" prop />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit</el-button
      >
    </el-form-item>
  </el-form>
</template>

<!-- <script lang="ts" setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  subdivision: "",
  date1: "",
  date2: "",
  agreement: false,
});

const onSubmit = () => {
  console.log("submit!", form);
};
</script> -->

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  subdivision: "",
  date1: "",
  date2: "",
  agreement: false,
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  subdivision: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],

  agreement: [
    {
      required: true,
      message: "Please select activity agreement",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  console.log("sabmit");

  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
