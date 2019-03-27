<template>

	<div class="homeBox">

	
	<div class="switchButton" style="background-color:white">
        <div class="switchItem activeItem" type="passenger">
            <p>寻人</p>
        </div>
        <div class="switchItem"  type="driver">
            <p>寻车</p>
        </div>
   </div>

   <!----寻人-->

       <div class="peopleList to-passenger" style="padding:0 0 20px 0;">

           <div class="listItem " style="margin:10px 0;background-color: white;padding:5px 5px">
               <div class="listItemCont">
                    <p class="text-center text-info idsInfo"><strong>行程编号：56</strong> </p>
                   <div class="listItemRow1">
                       <div class='itemTime'>
                           <img src="https://static.sfc.junyiqiche.com/sfc/日历.png">
                           <p class="starting_time">10月中旬</p>
                       </div>
                       <div class='itemMoney'>
                           <img  src="https://static.sfc.junyiqiche.com/sf/images/seat-icon.png">
                           <!-- <p>20元</p> -->
                           <span>2位</span>
                       </div>
                       <div class="itemIcon">
                           <img class="sharesData" src="https://static.sfc.junyiqiche.com/sf/images/sf-share-icon.png">
                           <a href="tel:{$vo.phone}">
                               <img src="https://static.sfc.junyiqiche.com/sfc/电话.png">
                           </a>
                       </div>
                   </div>

                   <div class="listItemRow2">
                       <p class="starting_point">起</p>
                       <p>成都</p>
                   </div>
                   <div class="listItemRow3">
                       <p>终</p>
                       <p class="destination">南京</p>
                   </div>

               </div>
               <div class="context  " style="background-color:white">
                   <p class="note">备注：hello world</p>
               </div>
           </div>
       </div>

       <!----寻车-->
       <div class="peopleList status-list to-driver" style="padding:0 0 20px 0;display:none">

           {volist name="driverList" id="vo"}
           <div class="listItem" style="margin:10px 0;background-color: white;padding:5px 5px">
               <div class="listItemCont">
                   <p class="text-center text-info "><strong>行程编号：56</strong> </p>
                   <div class="listItemRow1">
                       <div class='itemTime'>
                           <img src="https://static.sfc.junyiqiche.com/sfc/日历.png">
                           <p>{$vo.starting_time}</p>
                       </div>
                       <div class='itemMoney'>
                           <img src="https://static.sfc.junyiqiche.com/sfc/钱.png">
                            100元  X 2位 
                          
                           
                       </div>
                       <div class="itemIcon">
                           <img class="sharesData" src="https://static.sfc.junyiqiche.com/sf/images/sf-share-icon.png">
                           <a href="tel:114">
                               <img src="https://static.sfc.junyiqiche.com/sfc/电话.png">
                           </a>
                       </div>
                   </div>

                   <div class="listItemRow2">
                       <p>起</p>
                       <p>成都</p>
                   </div>
                   <div class="listItemRow3">
                       <p>终</p>
                       <p>南京</p>
                   </div>

               </div>
               <div class="context" style="background-color:white">
                   <p>备注：{$vo.note}</p>
               </div>
           </div>
           {/volist}


       </div>
</div>








	</div>

</template>

<script>

</script>


<style scoped>
.homeBox {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f2f2f2;
    }
	.switchButton,.form-switchButton{
  display: flex;
  width: 210px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #F7F8F9;
  margin: 16px auto;
  border-radius: 20px;
  justify-content:space-between;
  box-sizing: border-box;
  overflow: hidden;
}
.form-switchButton{
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
}
.switchItem{
  width:105px;
  text-align: center;
  line-height: 040px;
  float: left;
  overflow: hidden;
}
.switchItem:nth-child(1){
  border-radius: 0 20px 20px 0;
}
.switchItem:nth-child(2){
  border-radius: 20px  0 0 20px;
}
.switchItem p{
  width: 100%;
  font-size: 16px;
  color: #353535;
  display: block;
  float: left;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin: 0;
}

.form-switchItem{
  width:105px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  float: left;
  overflow: hidden;
}
.form-switchItem:nth-child(1){
  border-radius: 0 15px 15px 0;
}
.form-switchItem:nth-child(2){
  border-radius: 15px  0 0 15px;
}
.form-switchItem p{
  width: 100%;
  font-size: 14px;
  color: #353535;
  display: block;
  float: left;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin: 0;
}

.activeItem{
  background-color: #ef4631;
}

.activeItem p{
  color: #fff;
}

.peopleList{
  margin: 0 12px;
}
.listItem{
  padding:16px 0;
  border-top: 1px solid #F3F4F3;
}

.listItemCont img{
  width:22px;

}
.listItemRow1{
  display: flex;
  height: 24px;
}
.listItemRow1 p{
  font-size:15px;
  color: #353535;
}
.itemTime{
  flex: 5;
  display: flex;
  align-items: center;
}
.itemMoney{
  flex: 4;
  display: flex;
  align-items: center;
}
.itemMoney p:nth-child(2){
  display: inline-block;
  margin-right: 0.75px;
}
.itemTime img,.itemMoney img{
  margin-right:15px;
}
.itemIcon{
  flex: 2;
  display: flex;
  position: relative;
}
.itemIcon img,.itemIcon a{
  flex: 1;
}
.itemIcon img{
  margin-right: 15px;
}
.itemIcon a img{
  margin-right: 0;
  width: 100%;
}
.listItemRow2,.listItemRow3{
  display: flex;
  align-items: center;
  height: 24px;
  margin-top: 15px;

}

.listItemRow2 p:nth-child(1),.listItemRow3 p:nth-child(1){
  font-size:14px;
  color: #fff;
  display: inline-block;
  background-color: #00CC00;
  border-radius: 3px;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height:22px;
  margin-right: 15px;

}
.listItemRow3 p:nth-child(1){
  background-color: #ef4631;
}
.listItemRow2 p:nth-child(2),.listItemRow3 p:nth-child(2){
  font-size:15px;

  color: #353535;
}
.listItem:last-child{
  border-bottom: 1px solid #F3F4F3;
}
.itemLeft{
  flex: 1;
}
.itemRight{
  flex: 1;
  border-left: 2px solid #f0f0f0;
}
.leftTop,.leftBottom{
  height: 2px;
  display: flex;
  align-items: center;
}
.leftTop{
  margin-bottom:5px;
}
.leftTop img,.leftBottom img{
  width:18px;
  height: 18px;
}
.leftTop p,.leftBottom p{
  font-size: 14px;
  color: #666;
}
.leftTop p:nth-child(1){
  font-size: 11px;
  color: #fff;
  display: inline-block;
  background-color: #00cc00;
  border-radius: 3px;
  width:17px;
  height:17px;
  text-align: center;
  line-height:17px;
  margin-right: 5px;
}
.leftBottom p:nth-child(1){
  font-size: 11px;
  color: #fff;
  display: inline-block;
  background-color: #ff3300;
  border-radius:3px;
  width: 18px;
  height:18px;
  text-align: center;
  line-height:18px;
  margin-right: 1px;
}


.rightTop,.rightBottom{
  height: 2px;
  display: flex;
  align-items: center;
}
.rightTop{
  margin-bottom: 5px;
}
.rightTop img,.rightBottom img{
  width:17px;
  height:17px;
  margin:0 5px;
}
.rightTop img:nth-child(3),.rightBottom img:nth-child(3){
  width: 18px;
  height: 18px;
  margin-right: 0;
}
.rightTop p,.rightBottom p{
  font-size:14px;
  color: #666;
  margin-right: 5px;
  display: inline-block;
}
p.secondText{
  margin-right: auto;
}
.context{
  background-color: #f7f7f8;
  padding:0.15px 22px;
  margin-top: 15px;
  border-radius: 4;
}
.context p{
  font-size:14px;
  color: #888;

}

.backDiv{
  width:calc(100vw - 0rem);
  height: calc(100vh - 0rem);
  background:rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:1000;
  /**animation:fadeInFromNone 0.2s linear; */
  display: none;
}
.backDivCont{
  width: 100%;
  position: absolute;
  bottom:0;
  left: 0;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
@keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
.creat_hitch_hiking{
  height: 45px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom:1px solid #e5e5e5;
  margin-bottom: 5px;
}
.closeArea{
  position: absolute;
  top: 0rpx;
  height: 45px;
  line-height:45px;
  right:12px;
}
.closeArea p{
  font-size: 15px;
  color: #888;
  margin: 0;
}


.creat_form_item{
  padding: 0 12px;
  overflow: hidden;
}
.creat_form_item_left{
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding-right: 5px;
}
.creat_form_item_right{
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding-left:5px;
}
.creat_form_title p{
  font-size:14px;
  color: #666;
  margin: 0;
}
.creat_form_cont{
  text-align: center;
  margin:10px 0;
  display: flex;
}
.creat_form_cont input{
  width: 100%;
  height:35px;
  line-height:35px;
  font-size: 13px;
  color: #888;
  background-color: #f0f0f0;
  text-align: center;
  border:none;
}
.creat_form_cont textarea{
  width: 100%;
  background-color: #f0f0f0;
  text-align: left;
  font-size:13px;
  color: #888;
  box-sizing: border-box;
  padding: 20px 10px;
  border: none;
}

.picker{
  background-color: #f0f0f0;
  height:35px;
  line-height:35px;
  text-align: center;
}
.picker p{
  font-size:13px;
  color: #888;
  margin: 0;
}
.creat_form_cont picker:nth-child(1){
  border-right: 1rpx solid #e5e5e5;
}
.create_button{
  padding:10px 12px 15px 12px;
}
.create_button button{
  width: 100%;
  height:42.5px;
  line-height:42.5px;
  color: #fff;
  background-color: #ef4631;
  font-size: 15px;
  border:none;
  border-radius: 5px;
}
.fixed_button{
  position: fixed;
  top: 52%;
  right: 0;
  background-color: #ef4631;
  color: #fff;
  width:107px;
  height:36px;
  line-height: 30px;
  border-radius:23.5px 0 0 23.5px;
  text-align: center;
  display: flex;
  align-items: center;
  z-index: 999;
}
.fixed_button img{
  width: 16px;
  height:17px;
  margin:0 10px 0 16px;
}
.fixed_button p{
  font-size: 14px;
  color: #fff;
}

.logAreaBg{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
.logArea{
  width: 546rpx;
  height: 310rpx;
  background-color: #fff;
  border-radius: 20rpx;
  margin: 340rpx auto 0 auto;
}
.logAreaTitle{
  height: 90rpx;
  line-height: 90rpx;
  text-align: center;
}
.logAreaTitle p{
  font-size: 30rpx;
  color: #212121;
}
.logAreaDes{
  height:95rpx;
  line-height: 40rpx;
  margin-bottom: 40rpx;
  text-align: center;
  padding: 0 30rpx;
}
.logAreaDes p{
  font-size: 30rpx;
  color: #a8a8a8;
}

.logAreaChoose{
  display: flex;
  height: 85rpx;
  border-top: 1px solid #e5e5e5;
  position: relative;
}
.logAreaChoose p{
  flex: 1;
  height:85rpx;
  line-height: 85rpx;
  color: #07b2f9;
  text-align: center;
  border-right: 1px solid #e5e5e5;
}
.logAreaChoose p:nth-child(2){
  border: none;
}
.logAreaChoose button{
  width: 273rpx;
  height: 85rpx;
  opacity: 0;
  position: absolute;
  bottom: 0;
  right: 0;
}

.placeholder{
  color: #a8a8a8;
}

.itemIcon button{
  box-sizing: border-box;
  width: 40rpx;
  height: 40rpx;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
</style>	