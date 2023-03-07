<template>
  <div class="bx-post">
    <div class="bx-post-inner">
      <!-- 탑영역:S -->
      <div class="bpw-top">
        <span class="bc-thumb">
          <img
            :src="`https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3a777862c25617fb57cf5994c68db496.jpeg?x-expires=1678345200&x-signature=9olWY3kYPIOcOFMQiXVxt0K6oGY%3D`"
            alt=""
            class="img"
          />
        </span>
        <div class="bc-cop">
          <button class="b-ti">
            cjttkfkd00
            <div class="b-n">첫사랑찾았어요</div>
          </button>
          <p class="b-pag">
            안녕하세요? 저는 초등학교 1학년 때 만난 제 첫사랑을 찾고 싶어 이렇게 영상을 올려봅니다. 충주 성남 초등학교에
            1학년부터 4학년 때까지 다녔던 “정선우“라는 남자 애를 찾고 싶습니다. 저랑 1학년 때부터 4학년 때까지 연속으로
            같은 반이었던 친구입니다. 혹시 주변 지인분들 중
          </p>
          <div class="b-dt">2023-11-23 17시</div>
        </div>
      </div>
      <!-- 탑영역:E -->
      <!-- 컨텐츠영역:S -->
      <div class="bpw-cont">
        <div class="bc-midc">
          <!-- 컨텐츠 -->
        </div>
        <div class="bc-stic">
          <!-- 팔로우 , 좋아요 및 공유 등등 -->
          <div class="st-ag">
            <bx-button class="st-g primery" title="팔로우 버튼">
              <bx-icon class="ic" icon="person-plus-fill" title="팔로우 아이콘" />
            </bx-button>
            <span class="st-t">10.5K</span>
          </div>
          <div class="st-ag">
            <bx-button class="st-g" title="좋아요 버튼">
              <bx-icon class="ic" icon="heart-fill" title="좋아요 아이콘" />
            </bx-button>
            <span class="st-t">1.5K</span>
          </div>
          <div class="st-ag">
            <bx-button class="st-g" title="댓글 버튼">
              <bx-icon class="ic" icon="chat-dots-fill" title="댓글 아이콘" />
            </bx-button>
            <span class="st-t">1,518</span>
          </div>
          <div class="st-ag">
            <bx-button class="st-g" title="공유하기 버튼">
              <bx-icon class="ic" icon="reply-fill" title="공유하기 아이콘" />
            </bx-button>
            <span class="st-t">17</span>
          </div>
        </div>
      </div>
      <!-- 컨텐츠영역:E -->
      <!-- 하단영역:S -->
      <div class="bpw-btm">
        <div class="b-tt">베스트댓글</div>
        <div class="bc-reply">
          <button class="b-ti">
            cjttkfkd00
            <div class="b-n">첫사랑찾았어요</div>
          </button>
          <button class="b-pag">
            안녕하세요? 저는 초등학교 1학년 때 만난 제 첫사랑을 찾고 싶어 이렇게 영상을 올려봅니다. 충주 성남 초등학교에
            1학년부터 4학년 때까지 다녔던 “정선우“라는 남자 애를 찾고 싶습니다. 저랑 1학년 때부터 4학년 때까지 연속으로
            같은 반이었던 친구입니다. 혹시 주변 지인분들 중
          </button>
        </div>
      </div>
      <!-- 하단영역:E -->
    </div>
  </div>
</template>
<script>
import BxButton from '~/components/common/BxButton'
import BxIcon from '~/components/common/BxIcon.vue'
export default {
  name: 'BxPost',
  components: {BxButton, BxIcon}
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxPost.scss';
</style>
