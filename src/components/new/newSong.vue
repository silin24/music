<template>
  <div class="newSong">
    <div class="content">
      <div class="container">
        <ul v-for="(newSong,index) in reNewSongs" :key="index">
          <li v-for="(item,index) in newSong" :key="index" @click="goPlay(item)">
            <div>
              <a>
                <img :src="item.picUrl"/>
              </a>
              <div class="info">
                <span class="title">{{item.name}}</span>
                <span class="describe">{{item.song.artists[0].name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapState } from "vuex";
  import BScroll from "better-scroll";
  import { SAVE_SONGINFO,SHOWSONGDETAIL,SHOWMINIPLAY ,SAVE_IDARR,SAVE_PLAYLISTDATA} from '../../store/mutations-type';

  export default {
    computed: {
      ...mapState({
        newSongs: (state) => state.newSong,
      }),
      reNewSongs(){
       let a = _.drop(this.newSongs,4)
        return _.chunk(a,3 )
      },
      saveSongDetail(){
      let d = this.newSongs.map((song)=>{
        let reSong ={}
        reSong.id = song.id
        reSong.name = song.name
        reSong.author = song.song.artists[0].name
        reSong.picUrl = song.picUrl
        return reSong
      })
      // console.log(d);
      return d
      },
      recDaySongIdArr(){
        let arr = []
        this.newSongs.forEach((item)=>{
          arr.push(item.id)
        })
        // console.log(arr);
        return arr
      },

    },
    methods: {
      goPlay(song){
        let reSong ={}
        reSong.id = song.id
        reSong.name = song.name
        reSong.author = song.song.artists[0].name
        reSong.picUrl = song.picUrl
        this.$store.commit(SHOWSONGDETAIL,true)
        this.$store.commit(SHOWMINIPLAY,Date.now())
        this.$store.commit(SAVE_SONGINFO,reSong)
        this.$store.commit(SAVE_IDARR,this.recDaySongIdArr)
        this.$store.commit(SAVE_PLAYLISTDATA,this.saveSongDetail)
      }
    },
    mounted() {
       this.$store.dispatch("getNewSongAction");
    },
    watch: {
      reNewSongs() {
        this.$nextTick(() => {
          new BScroll(".content", {
            scrollX: true,
            click: true,
          });
        });
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .content
    margin-top 40px
    width 1080px
    overflow hidden
    .container
      width 1980px
      display flex
      ul
        display flex
        width 990px
        margin-left 44px
        flex-direction column
        li
          height 165px
          div
            display flex
            .info
              width 780px
              display flex
              flex-direction column
              justify-content center
            a
              margin-right 30px
              img
                width 136px
                height 136px
                border-radius 30px
</style>
