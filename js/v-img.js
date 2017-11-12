/**
 * Created by web-01 on 2017/9/24.
 */
    //数据绑定
let a=new Vue({
    el:"#f1",
    data:{
        f1:{}
         },
    mounted(){
        this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/banner.php').then(data=>{
            this.f1=data.data.slice(8,12)
        })
    }
})
//热销单凭
let b=new Vue({
     el:"#f2",
     data:{
         data:{}
     },
    mounted(){
        this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/product.php').then(data=>{
            this.data=data.data.slice(0,8)
        })
    }
})
    //精品推荐
    let c=new Vue({
        el: "#f3",
        data: {
            data:{}
        },
        mounted(){
            this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/product.php').then(data=>{
                this.data=data.data.slice(9,21)
            })
        }
    })
 //广告轮播
 let adv=new Vue({
      el:"#product-adv",
     data:{
         adv:{},



     },
     mounted(){
         let divWidth=$(".product-item").width()*14
         $("#f3").width(divWidth)
         //console.log($('.product-item'))
         this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/banner.php').then(data=>{
             console.log(1)
             this.adv=data.data.slice(12,17)
         })
     }
 })
   let count=0
function moveOnce(){
    count==5?count=0:count++
    $(".product-adv-img").eq(count).fadeIn().siblings().fadeOut()
}
let timer=setInterval(moveOnce,3000)
 $(".product-adv-img").hover(()=>{
     clearInterval(timer)
 },()=>{
     timer=setInterval(moveOnce,3000)
 })
//手机
  let d=new Vue({
      el:"#f4",
      data:{
        f4:{}
      },
      mounted(){
          this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/product.php').then(data=>{

              console.log(data.data)
              this.f4=data.data.slice(21,28)
          })
      }
  })
  //笔记本电脑
  let e=new Vue({
      el:"#f5",
      data:{
         f5:{}
      },
      mounted(){
          this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/product.php').then(data=>{
              console.log(data.data)
              this.f5=data.data.slice(28,31)
          })
      }
  })
//平板电脑
  let f=new Vue({
      el:"#f6",
      data:{
          f6:{}
      },
      mounted(){
          this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/product.php').then(data=>{
              console.log(data.data)
              this.f6=data.data.slice(31,37)
          })
      }
  })
  let g=new Vue({
      el:"#f7",
      data:{
          f7:{}
      },
      mounted(){
          this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/product.php').then(data=>{
              console.log(data.data)
              this.f7=data.data.slice(37,44)
          })
      }
  })

