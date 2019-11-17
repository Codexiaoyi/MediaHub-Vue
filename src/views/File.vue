<template>
  <div class="file">
    <b-container>
      <b-row>
        <b-col cols="8">
            <b-form-file v-on:change="getFile($event)" browse-text="选择文件" placeholder="请选择需要上传的文件..."></b-form-file>
        </b-col>
        <b-col cols="4">
          <b-button variant="success" v-on:click="submitForm($event)">上传</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <b-table striped hover :items="items" >
<template v-slot:cell(actions)="row">
          <b-button size="sm">
            删除
          </b-button> 
        </template>
</b-table>
</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                fileSize: "",
                fileCount: "",
                items: [],
                fields: [{
                    key: 'actions',
                    label: ''
                }]
            }
        },
        methods: {
            getFile(event) {
                this.file = event.target.files[0];
                console.log(this.file);
            },
            submitForm(event) {
                event.preventDefault();
                let formData = new FormData();
                formData.append("file", this.file);

                this.$api.post('file/upload', formData, r => {
                    this.fileName = r.fileName,
                        this.fileSize = r.size,
                        this.fileCount = r.count
                });
            }
        },
        beforeCreate() {
            this.$api.get('file/list', null, r => {
                this.items = r.result
            });
        },
    }
</script>