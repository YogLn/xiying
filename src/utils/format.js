import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(utcString, dateFormat = DATA_FORMAT) {
  return dayjs.utc(utcString).utcOffset(8).format(dateFormat)
}

export function getNowTime() {
  return dayjs()
}

export function getTime() {
  return formatUtcString(dayjs())
}

export function timeCompare(time1, time2) {
  // 当前时间 活动时间
  // 0 进行 -1 结束  1未开始
  let data1 = time1.split(' ')
  let data2 = time2.split(' ')

  let A0 = data1[0].split('-')
  let A1 = data1[1].split(':')
  let B0 = data2[0].split('-')
  let B1 = data2[1].split(':')

  
  let [i, j] = [0, 0]
  while (i < A0.length && j < B0.length) {
    if (parseInt(A0[i]) > parseInt(B0[j])) {
      return 1
    }
    if (parseInt(A0[i]) < parseInt(B0[j])) {
      return -1
    }
    i++
    j++
  }
	i = 0; j = 0;
	while (i < A1.length && j < B1.length) {
    if (parseInt(A0[i]) > parseInt(B0[j])) {
      return 1
    }
    if (parseInt(A0[i]) < parseInt(B0[j])) {
      return -1
    }
    i++
    j++
  }
	return 0
}
