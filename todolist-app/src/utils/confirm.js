//获取vue实例
import vm from "../main";

//传入标题 内容 确认按钮和取消按钮文案
export function confirmDialog ({title, text, cancelText, confirmText}) {
  //executor处理后续逻辑
  return new Promise((resolve, reject) => {
    //把reject和resolve通过$emit事件传参带过去,方便Promise状态扭转
    vm.$emit("setDialog", {
      title,
      text,
      cancelText,
      confirmText,
      resolve,
      reject
    });
  });
}

//公共函数方法触发
export default confirmDialog;
