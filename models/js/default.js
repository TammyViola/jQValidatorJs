
function globalFormFn(){

    $(".global-form-box").jQValidator({
        excluded: ':disabled', 
     	fields: {
     		applyName: {
     			validators: {
                    notEmpty: true
                }
     		},
            applyGender: {
                validators: {
                    notEmpty: true
                }
            },
            applyBirth: {
                validators: {
                    notEmpty: true
                }
            },
            applyTel: {
                validators: {
                    notEmpty: true,
                    phone: {
                        /** 电话号码类型: 
                        **  - 'MB':移动电话
                        *   - 'LD'：座机电话
                        *   - 'ALL':移动电话或座机
                        **/
                        phoneType: 'ALL'
                    }
                }
            },
            applyEmail: {
                validators: {
                    notEmpty: true,
                    emailAddress: true
                }
            },
            applyId: {
                validators: {
                    notEmpty: true,
                    idCard: true
                }
            },
            applyPost: {
                validators: {
                    notEmpty: true
                }
            },
            applyRegion: {
                validators: {
                    notEmpty: true
                }
            },
            applyIntrod: {
                validators: {
                    stringLength:  {
                        max: 300
                    }
                }
            },
            applyFile: {
                validators: {
                    file: {
                        /*
                        * 文件类型参考网址：
                        * https://blog.csdn.net/zhuyangru/article/details/70254789
                        */
                        extension: 'jpg,jpeg,doc,docx',
                        type: 'image/jpg,image/jpeg,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    }
                }
            }
     	}
    });

}
$(window).load(function() {
    globalFormFn();

    /// 出生年月
    laydate.render({
      elem: '#applyBirth'
      ,max: 0
    });

    /// 起止时间（多个绑定）
    lay('.laydate-input').each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
            ,type: 'month'
            ,range: '~'
            ,format: 'yyyy-MM'
        });
    });
});
 
 
/// 表单提交
$('.global-form-box .btn-submit').click(function(){
    var jQValidator = $(this).parents('.global-form-box').data('jQValidator');
    var newAddData = [
        {name: 'MenuId', value: '111aa'},
        {name: 'ContentAuxId', value: '222bb'}
    ]

    console.log("=============================");

    // 点击获取表单参数值
    var formdatas = jQValidator.getFormDatas(newAddData);
    for (let pair of formdatas.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

　　/// 点击提交按钮进行校验
 　 jQValidator.validate();  

　　/// bool, 所有字段验证是否正确
　　var isValid = jQValidator.isValid();

　　if(isValid){
        alert('所有字段验证正确')
   　　　////// 如果正确，执行的函数

　　}

});

/// 重置表单
$('.global-form-box .btn-reset').click(function(){
    $('.global-form-box').data('jQValidator').resetForm(true);
    globalFormFn();
    $('.frm-file-list').html('').hide();
});

/// 选择框颜色
$('select.form-control').on('change', function(){
    if($(this).val().length > 0){
        $(this).css('color', '#333');
    }else{
        $(this).css('color', '#999');
    }
})

/// 输入框字数变换
var _keyup = 'onkeyup' in document ? 'keyup' : 'input';
var _numColor = $('.frm-ctrl-num').css('color');
$('.form-control').on(_keyup, function(){
    var $group = $(this).parents('.form-group'),
        $num = $group.find('.frm-ctrl-num'),
        $now = $num.find('.now'),
        _now = parseInt($now.text()),
        _total = parseInt($num.find('.total').text()),
        _valLen = $(this).val().length;
    if($num.length>0){
        _now = _valLen;
        if(_now > _total){
            $num.css('color', '#ff0000');
        }else{
            $num.css('color', _numColor);
        }
        $now.text(_now);
    }
});

// 教育经历增加
$(".btn-multidata-add").on('click', function(){
    var $this = $(this);
    var listid = '#' + $(this).attr('data-list');
    var jQValidator = $(this).parents('.global-form-box').data('jQValidator');
    
    var addOptions = {
        addBtnElem: this,  // 增加按钮
        deleteBtnElem: '.btn-multidata-delete',  // 删除按钮
        container: listid,  // 新增结构外层容器
        max: 3,  // 结构最多新增数量
        // 结构新增完成后执行函数
        onAddEnd: function(fieldIndex){  
            // 起止时间事件绑定
            lay('.laydate-input').each(function(){
                laydate.render({
                    elem: this
                    ,trigger: 'click'
                    ,type: 'month'
                    ,range: '~'
                    ,format: 'yyyy-MM'
                });
            });

            // 新增校验
            jQValidator.addField('applyRangeTime_'+fieldIndex, {
                validators: {
                    notEmpty: true
                }
            });
            jQValidator.addField('applyEduSchool_'+fieldIndex, {
                validators: {
                    notEmpty: true
                }
            });
            jQValidator.addField('applyEduMajor_'+fieldIndex, {
                validators: {
                    notEmpty: true
                }
            });
            jQValidator.addField('applyEduBg_'+fieldIndex, {
                validators: {
                    notEmpty: true
                }
            });    
        },
        // 结构删除后执行函数
        onRemoveEnd: function(fieldIndex){

        }
    }
    jQValidator.AddFieldHtml(addOptions);
});

/// 复选框全部展示
$('.frm-check-open').on('click', function(){
    var $group = $(this).parents('.frm-check-group'),
        sht = parseInt($group.find('.frm-check-box').outerHeight()),
        row = ($group.find('.frm-check-box').length % 3 == 0) ? ($group.find('.frm-check-box').length / 3) : (parseInt($group.find('.frm-check-box').length / 3)+1),
        totalHt = sht * row;
    $(this).remove();
    $group.stop(true, true).animate({'height': totalHt}, 400);
});

/// 上传文件列表-删除
function fileDelFn(){
    $('.frm-file-list .btn-del').on('click', function(){
        var $list = $(this).parents('.frm-file-list'),
            $li = $(this).parents('li');
        $li.remove();
        if($list.children('li').length>0){
            $list.show();
        }else{
            $list.hide();
        }
    });
}
$(window).load(function(){
    fileDelFn();
})

/* 上传文件列表-增加*/
$('#applyFile').on('change', function(event) {
    var val = $(this).val(),
        nameArr = val.split('\\'),
        name = nameArr[nameArr.length-1];

    /// 对上传控件验证状态更新
    $(".global-form-box").data('jQValidator').updateStatus("applyFile",  "NOT_VALIDATED",  null ).validateField('applyFile');

    var isTrue = $(".global-form-box").data('jQValidator').isValidField('applyFile');
    
    if(isTrue){
        $('.frm-file-list').show().append('<li><div class="file-pross"></div><div class="file-bd"><h5 class="title"><a>'+ name +'</a></h5><a href="javascript:void(0)" class="btn-del"></a></div></li>');
    }
    fileDelFn();
});     

