<template>
  <el-main>
    <!-- title -->
    <h1>新建分类</h1>

    <el-form label-width="80px">
      <!-- input -->
      <el-form-item label="名称">
        <el-input v-model="form.val"></el-input>
      </el-form-item>
      <!-- button -->
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
// import create from "@/api/category/create";

export default {
  data: () => ({
    form: {
      val: "name",
    },
  }),

  methods: {
    save() {
      // const res = await create(this.form);
      // console.log(res);

      this.$message({
        type: "success",
        message: "保存成功",
        center: true,
        showClose: true,
      });
      this.$router.push("/category/list");
    },
  },
};
</script>

<style></style>
