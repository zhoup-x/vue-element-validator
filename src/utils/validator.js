export default function validator(value, type) {
    switch (type) {
        case 'chinese':
            value = value.replace(/[^\u4E00-\u9FA5]/g, "");
            return value;
            break;
        case 'number':
            value = value.replace(/[^\d]/g, ''); // 清除“数字”和“.”以外的字符
            if (value.indexOf('.') < 0 && value != '') {
                // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                value = parseInt(value);
            }
            return value;
            break;
        case 'account':
            value = value.replace(/[^\a-\z\A-\Z0-9]/g, '');
            return value;
            break;
        case 'float':
            value = value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
            value = value.replace(/^\./g, ""); //验证第一个字符是数字
            value = value.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
            value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
            if (value.indexOf(".") < 0 && value != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                if (value.substr(0, 1) == '0' && value.length == 2) {
                    value = parseFloat(value);
                }
            }
            return value;
            break;
        default:
            value = value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, "");
            return value;

    }
}