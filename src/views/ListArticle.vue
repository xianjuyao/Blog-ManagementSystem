<template>
    <div>
        <el-table :data="articles">
            <el-table-column prop="title" label="标题" >
            </el-table-column>
            <el-table-column prop="content" label="内容" >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
                    <el-button @click="delete(scope.row._id)" type="text" size="small" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ListArticle",
        data() {
            return {
               articles:[]
            }
        },
        methods:{
            fetch(){
                this.$http.get("/articles").then(res=>{
                    this.articles=res.data;
                });
            },
            edit(id){
                this.$router.push(`/articles/update/${id}`);
            },
            delete(id){
                this.$http.delete(`articles/${id}`).then(res=>{
                    this.$message({
                        message: '文章删除成功',
                        type: 'success'
                    });
                    this.fetch();
                });
            }
        },
        created() {
            this.fetch();
        }
    }


</script>

<style scoped>

</style>