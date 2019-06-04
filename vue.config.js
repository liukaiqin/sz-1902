/* 跨域配置 */
const path = require("path");
module.exprots = {
    devServer:{
        proxy:{
            "/api":{
                target:"",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{  //覆盖webpack的配置项
        resolve:{ //配置别名
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "@common":path.resolve(__dirname,"./src/common"),
                "@api":path.resolve(__dirname,"./src/api"),
                "@commonents":path.resolve(__dirname,"./src/commonents"),
                "@utils":path.resolve(__dirname,"./src/utils"),
                "@views":path.resolve(__dirname,"./src/views")
            }
        }
    }
}