(()=>{
    Vue.component("category-info-list-f1",{
        template:`
              <div class="category-info-list-f1" style="height: 70px;">
                             <a href="">浏览手机频道</a>
                         </div>
                 `
    })
    Vue.component("category-info-list-f3",{
        template:`
               <div class="category-info-list-f3" style="height: 229px;">
                            <div v-for="d in div">
                                <a href=""><img :src="d.src" alt=""></a>
                                <p class="left-title">{{d.title}}</p>
                                <p class="left-price">{{d.price|changeMoney}}</p>
                            </div>
                        </div>
                    </div> `,
        data(){
            return {
                div:[
                    {src:"images/left-info-img1.jpg",title:"HUAWEIP10",price:"3987"},
                    {src:"images/left-info-img2.jpg",title:"HUAWEIP10",price:"3988"},
                    {src:"images/left-info-img3.jpg",title:"HUAWEIP10",price:"3989"},
                    {src:"images/left-info-img4.jpg",title:"HUAWEIP10",price:"3986"}
                 ]
            }
        },
        filters:{
            changeMoney(val){
                return `¥${val}`
            }
        }
    })
     Vue.component("category-info-list-f2",{
         template:`<div class="category-info-list-f2"  style="height: 150px;">
                             <ul>
                                 <li v-for="li in lis"><a href="">{{li}}</a></li>
                             </ul>
                         </div>`,
             data(){
             return {
                 lis:["荣耀","HUAWEI\tP系列","畅玩","HUAWEI\tMate系列","HUAWEI\tnova系列"
                    ,"HUAWEI\t麦芒系列","华为畅享系列","合约机"
                 ]
             }
         }
     })
    let banner=new Vue({
        el:"#banner-box",
        data:{
            data:{}
        },
        mounted(){
            this.$http.get('http://127.0.0.1/HUAWEI-Mall/data/index/banner.php').then(data=>{
                this.data=data.data.slice(0,8)
            })
        }
    })
    let index=0
    function moveOnce() {
        index==8? index=0:index++
        $(".banner-img").eq(index).fadeIn().siblings().fadeOut()
        $(".banner-img-index span").eq(index).addClass("onbtn").siblings().removeClass("onbtn")
    }
   let timer=setInterval(moveOnce,3000)
    //
    //$("#banner-box").hover(e=>{
    //    clearInterval(timer)
    //},()=>{
    //    timer=setInterval(moveOnce,3000)
    //})
    $(".banner-img-index span").hover(e=>{
        index=$(e.target).index()-1
        moveOnce()
    })
    let c_info=new Vue({
        el:".top-left-sider",
        data:{
            arr:[
                {title:"手机",Product1:"荣耀",Product2:"HUAWEIP系列"},
                {title:"笔记本&平板",Product1:"平板电脑",Product2:"笔记本电脑"},
                {title:"穿戴",Product1:"手环",Product2:"手表"},
                {title:"智能家居",Product1:"子母路由",Product2:"电视盒子"},
                {title:"通用配件",Product1:"移动电源",Product2:"手机"},
                {title:"专属配件",Product1:"保护壳",Product2:"保护套"},
            ]
        }
    })
    $(".category-info").hover(function(){
        $(this).find(".category-info-list-box").toggleClass("hide")
     })
     //adv-close 
         $("#top-banner-min-close").click(()=>{
            $("#top-banner").fadeOut()
        })
     let n=1
    function advOnce(){
        n==4?n=0:n++
        $('.category-info-list-f3-adv').css('top',-49*n)
    }

    {
       let timer=setInterval(advOnce, 2000)
    }
     $('category-info-list-f3-adv')
})()