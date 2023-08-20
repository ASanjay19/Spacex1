
import {Dimensions} from 'react-native'


export const Colors = {
  BLUE : '#4d8bd6',
  WHITE:'#FFFF',
  BLACK: '#121314',
  GRAY:'#ebebeb',
  LIGHT_GREEN:'#c3e3ac',
  SUCESS_GREEN:'#6b964d',
  LIGHT_BLUE:'#7e85c4',
  LIGHT_BLACK:'#63625e'
}


const {width,height} = Dimensions.get('window');

export function wp(percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
  }

 export function hp(percentage) {
    const value = (percentage * height) / 100;
    return Math.round(value);
  }

