
function globalFormFn(){

    $(".global-form-box").jQValidator({
        // The clear button class
        // 默认值： null
        clearButton: '.frm-ctrl-clear',

        // 初始加载是否清空表单
        isClearForm: true,
        /**
        *  指定不验证的情况
        *  值可设置为以下三种类型：
        *  1、String  ':disabled, :hidden, :not(:visible)'
        *  2、Array  默认值  [':disabled', ':hidden', ':not(:visible)']
        *  3、带回调函数  
            [':disabled', ':hidden', function($field, validator) {
                // $field 当前验证字段dom节点
                // validator 验证实例对象 
                // 可以再次自定义不要验证的规则
                // 必须要return，return true or false; 
                return !$field.is(':visible');
            }]
        */
        excluded: ':disabled', 
     	fields: {
     		account: {
     			validators: {
                    notEmpty: true,
                    stringLength: {
                    	min: 8
                    }
                }
     		},
     		password: {
     			validators: {
                    notEmpty: true,
                    stringLength: {
                    	min: 6,
                    	max: 12
                    },
                    different: {  
                        field: 'account',//需要进行比较的input name值
                        message: '不能和账号相同'
                    }
                }
     		},
     		repassword: {
     			validators: {
                    notEmpty: true,
                    identical: {
                        field: 'password',
                        message: '两次密码不一致'
                    }
                }
     		},
     		gender: {
     			validators: {
                    notEmpty: true
                }
     		},
            check: {
                validators: {
                    notEmpty: true
                }
            },
     		edu: {
     			validators: {
                    notEmpty: true
                }
     		},
     		tel: {
     			validators: {
                    notEmpty: true,
                    phone: {
                        /** 电话号码类型: 
                    	**  - 'MB':移动电话
                        *   - 'LD'：座机电话
                        *   - 'ALL':移动电话或座机
                        **/
                        phoneType: 'MB'  
                    }
                }
     		},
            phone1: {
               validators: {
                    phone: {
                        phoneType: 'LD' 
                    }
                } 
            },
     		idNumber: {
     			validators: {
                    notEmpty: true,
                    idCard: true
                }
     		},
     		email: {
     			validators: {
                    emailAddress: true
                }
     		},
            addr: {
                validators: {
                    notEmpty: true
                }
            },
            attachment: {
                validators: {
                    file: {
                        /*
                        * 文件类型参考网址：
                        * https://blog.csdn.net/zhuyangru/article/details/70254789
                        */
                        extension: 'png,jpg,jpeg,gif,txt,doc,docx,pdf,ppt,pptx,zip,rar',
                        type: 'image/png,image/jpg,image/jpeg,image/gif,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/zip,application/rar'
                    }
                }
            }
     	}
    });

}
$(window).load(function() {
    globalFormFn();
});
 
 
/// 表单提交
$('.frm-submit').click(function(){

　　/// 点击提交按钮进行校验
 　  $('.global-form-box').data('jQValidator').validate();  

　　/// bool, 所有字段验证是否正确
　　var isValid = $('.global-form-box').data('jQValidator').isValid();

　　if(isValid){
        alert('所有字段验证正确')
   　　　////// 如果正确，执行的函数

　　}

});

/// 验证 tel 字段是否正确
$('.btn-valid-tel').click(function(){
	var isValid = $(".global-form-box").data('jQValidator').isValidField('tel');
	alert('手机电话字段验证是'+isValid)
});

/// 验证 phone 字段是否正确
$('.btn-valid-phone').click(function(){
    var isValid = $(".global-form-box").data('jQValidator').isValidField('phone');
    alert('座机电话字段验证是'+isValid)
});

/// 验证 身份证 字段是否正确
$('.btn-valid-id').click(function(){
    var isValid = $(".global-form-box").data('jQValidator').isValidField('idNumber');
    alert('身份证字段验证是'+isValid)
});

/// 重置表单
$('.global-form-box .frm-reset').click(function(){
    $('.global-form-box').data('jQValidator').resetForm(true);
    globalFormFn();
});

// 点击添加动态文本框
var fieldIndex = 1;
$('.btn-addfield').on('click', function(){
    var htm = '';
    htm += '<div class="form-row">';
    htm += '<h4 class="tit">工作经历'+ fieldIndex +'</h4>';
    htm += '<div class="form-group">';
    htm += '<label class="control-label" for="workTime'+ fieldIndex +'"><i class="must">*</i>工作时间</label>';
    htm += '<div class="form-group-cell">';
    htm += '<input type="text" class="form-control" name="workTime'+ fieldIndex +'" id="workTime'+ fieldIndex +'"/>';
    htm += '</div>';
    htm += '</div></div>';

    $('.frm-btn-group').before(htm);

    $('.global-form-box').jQValidator('addField', 'workTime'+fieldIndex, {
        validators: {
            notEmpty: true
        }
    });

    fieldIndex++;
});

// 点击移除验证
$('.btn-removefield').on('click', function(){
    $('.global-form-box').jQValidator('removeField', 'workTime1');
});


