/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "오지운",
    nameEn: "Groom",
    father: "오현진",
    mother: "최윤영",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "남민지",
    nameEn: "Bride",
    father: "남경민",
    mother: "신은정",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "11:30",
    venue: "더 파티움 안양",
    hall: "5층 브리에홀",
    address: "경기도 안양시 동안구 시민대로 311 5층 (금강스마트빌딩)",
    mapLinks: {
      kakao: "https://place.map.kakao.com/138147430",
      naver: "https://naver.me/IFgdHqLz"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "오지운", bank: "국민은행", number: "938002-00-679730" },
      { role: "아버지", name: "오현진", bank: "우체국은행", number: "110-0098-90065" },
      { role: "어머니", name: "최윤영", bank: "카카오뱅크", number: "3333-04-3581264" }
    ],
    bride: [
      { role: "신부", name: "남민지", bank: "토스뱅크", number: "1000-2502-0698" },
      { role: "아버지", name: "남경민", bank: "신협은행", number: "010-5777-9176" },
      { role: "어머니", name: "신은정", bank: "농협은행", number: "819-12-424764" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "오지운 ♥ 남민지 결혼합니다",
    description: "2027년 1월 9일, 소중한 분들을 초대합니다."
  }
};
