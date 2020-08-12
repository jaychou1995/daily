<template>
  <div class="container">
    <div class="content">
      <div class="content-box" @click="show = true">
        <van-icon class="date-icon" name="notes-o" size="15px"/>
        <span class="date-text">{{ startDate }}</span>
      </div>
      <div class="content-box">~</div>
      <div class="content-box" @click="show = true">
        <van-icon class="date-icon" name="notes-o" size="15px"/>
        <span class="date-text">{{ endDate }}</span>
      </div>
      <div class="content-box">
        <van-icon class="date-icon" name="search" size="15px"/>
      </div>
    </div>
    <van-calendar
      v-model="show"
      @confirm="onConfirm"
      type="range"
      color="#4b76f6"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'CalendarSelect',
  data() {
    return {
      show: false, //是否显示
      startDate: dayjs()
        .subtract(1, 'month')
        .format('YYYY-MM-DD'), //选择的开始时间
      endDate: dayjs().format('YYYY-MM-DD'), //选择的最后时间
      minDate: new Date(2019, 0, 1), //最早能显示的时间
      maxDate: new Date() //最后能显示的时间
    }
  },
  methods: {
    onConfirm(date) {
      const [start, end] = date
      this.show = false
      this.startDate = dayjs(start).format('YYYY-MM-DD')
      this.endDate = dayjs(end).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 30px 60px;
  background-color: #fff;
  .content {
    display: flex;
    justify-content: space-around;
    .date-icon {
      vertical-align: middle;
    }
    .date-text {
      margin-left: 10px;
      font-size: 26px;
      text-decoration: underline;
    }
  }
}
</style>
