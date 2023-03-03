<template>
  <div class="pg-auth-wrap">
    <input id="pg-gl-id" type="text" />
    <input id="pg-gl-pw" type="password" />
    <button>button</button>
    <button v-if="!isAuthKakao" @click="handlerAuthSnsLogin('kakao')">카카오</button>
    <template v-else>
      <button @click="handlerAuthSnsLogout('kakao')">로그아웃</button>
    </template>
    {{ getAuthKakaoUserInfo }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: null,
      Kakao: null,
      isAuthKakaoToken: ``
    }
  },
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          src: '/js/plugins/kakao.min.js'
        }
      ]
    }
  },
  computed: {
    isAuthKakao() {
      return this.$store.getters['auth/kakao/isAuth']
    },
    getAuthKakaoUserInfo() {
      return this.$store.getters['auth/kakao/getUserNm']
    }
  },
  watch: {},
  mounted() {
    if (window.Kakao) {
      this.Kakao = window.Kakao
    }
  },
  methods: {
    async handlerAuthSnsLogout(gubun) {
      switch (gubun) {
        case 'kakao':
          await this.$store.dispatch('auth/kakao/kakaoLogout', true)
          alert('로그아웃')
          break
      }
    },
    async handlerAuthSnsLogin(gubun) {
      switch (gubun) {
        case 'kakao':
          if (this.Kakao) {
            await this.$store.dispatch('auth/kakao/kakaoLogin', this.Kakao)
          }
          break
      }
    }
  }
}
</script>
