<template>
    <div>
        <el-form ref="form"  @submit.native.prevent="updateArticle" :model="article" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="article.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <el-input type="textarea" v-model="article.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>
    export default {
        name: "UpdateArticle",
        data() {
            return {
                article: {
                    title:"",
                    content:"",
                }
            }
        },
        methods: {
            fetch(){
                this.$http.get(`articles/${this.$route.params.id}`).then(res=>{
                    this.article=res.data;
                });
            },
            updateArticle() {
                this.$http.put(`/articles/${this.$route.params.id}`,this.article).then(res=>{
                    this.$message({
                        message: '文章修改成功',
                        type: 'success'
                    });
                    this.$router.push("/articles/index");
                });
            },
            cancel(){
                this.$router.push(`/articles/index`);
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style scoped>

</style>