
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
                    },
                    identical: {
                        field: 'repassword',
                        message: '两次密码不一致'
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
                    notEmpty: true,
                    gender: {
                        idCardName: 'idNumber'
                    }
                }
     		},
            check: {
                validators: {
                    notEmpty: true
                }
            },
            birth: {
                validators: {
                    notEmpty: true,
                    birthDate: {
                        idCardName: 'idNumber'
                    }
                }
            },
            idNumber: {
                validators: {
                    notEmpty: true,
                    idCard: true
                }
            },
            bankCard: {
                validators: {
                    bankCard: true
                }
            },
            qqNum: {
                validators: {
                    QQNumber: true
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
            allTel: {
                validators: {
                    phone: {
                        phoneType: 'ALL' 
                    }
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
                        extension: 'png, jpg, jpeg, gif',
                        type: 'image/png,image/jpg,image/jpeg,image/gif'
                    }
                }
            },
            attachment2: {
                validators: {
                    file: {
                        extension: 'txt,doc,docx,ppt',
                        type: 'text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint'
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
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('tel', 'NOT_VALIDATED').validateField('tel');
    isValid = jQValidator.isValidField('tel');
	alert('手机电话字段验证是'+isValid)
});

/// 验证 phone 字段是否正确
$('.btn-valid-phone').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('phone1', 'NOT_VALIDATED').validateField('phone1');
    isValid = jQValidator.isValidField('phone1');
    alert('座机电话字段验证是'+isValid)
});

/// 验证 allTel 字段是否正确
$('.btn-valid-allTel').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('allTel', 'NOT_VALIDATED').validateField('allTel');
    isValid = jQValidator.isValidField('allTel');
    alert('电话号码字段验证是'+isValid)
});

/// 验证 身份证 字段是否正确
$('.btn-valid-id').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('idNumber', 'NOT_VALIDATED').validateField('idNumber');
    isValid = jQValidator.isValidField('idNumber');
    alert('身份证字段验证是'+isValid)
});

/// 验证 出生日期 字段是否正确
$('.btn-valid-birth').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('birth', 'NOT_VALIDATED').validateField('birth');
    isValid = jQValidator.isValidField('birth');
    alert('出生日期字段验证是'+isValid)
});

/// 验证 性别 字段是否正确
$('.btn-valid-sex').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('gender', 'NOT_VALIDATED').validateField('gender');
    isValid = jQValidator.isValidField('gender');
    alert('性别字段验证是'+isValid)
});

/// 验证 附件 字段是否正确
$('.btn-valid-file').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('attachment', 'NOT_VALIDATED').validateField('attachment');
    isValid = jQValidator.isValidField('attachment');
    alert('附件字段验证是'+isValid)
});

/// 验证 附件2 字段是否正确
$('.btn-valid-file2').click(function(){
    var isValid;
    var jQValidator = $(".global-form-box").data('jQValidator'); 
    jQValidator.updateStatus('attachment2', 'NOT_VALIDATED').validateField('attachment2');
    isValid = jQValidator.isValidField('attachment2');
    alert('附件2字段验证是'+isValid)
});

/// 重置表单
$('.frm-reset').click(function(){
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

    $('.global-form-box').append(htm);

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
    alert('必填限制移除掉啦！');
});



