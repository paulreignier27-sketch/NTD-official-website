"use strict";

/* ---------- Content (edit here, no need to touch the HTML) ---------- */

const PLACEHOLDER_PHOTO = "photos/download.jpg";

const orgChart = [
    [{ name: "Pastor Raymun Fajilan", position: "District Pastor", photo: "photos/pastor-profile.jpg" }], //District Pastor
    [{ name: "Joe Mutia", position: "District President & San Agustin Elder", photo: "photos/mutia.jpg" }], //District President
    [
        { name: "Rommel Mallorca", position: "District Vice President & Sugod Elder" },
        { name: "John Brian Roldan", position: "District Vice President & San Agustin Elder", photo: "photos/roldan.jpg" },
        { name: "Chona Morales", position: "Secretary & San Agustin Elder", photo: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/796854468_1646095957087998_2537317253628663712_n.jpg?stp=dst-jpg_tt6&cstp=mx577x559&ctp=s577x559&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFxgMnU9wz0twO7r0Y8vPiBljh63u9KTdSWOHre70pN1LjrF6Jw9zO7uuWEICxhG_dkbguq3siIret3QX_bycnV&_nc_ohc=bWF5qtJmoMAQ7kNvwFjovAS&_nc_oc=Adp6oOlnoqFhFVfbGwOzANcfb31Qo0g4l4lKxk-V_ZdVosxp-rkI5GL2MeVgV8iWv9B1KHqcptFZPSaMYdVWHhTo&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=kPLxbXg85JtZdjf8miv6Kg&_nc_ss=7b2a8&oh=00_AQPMSml3HsNMz8_u_cX3-D07Z6cglpKBx9vtxS9AsS7ISA&oe=6ACD4DD0" },
        { name: "Gladys Jongay", position: "District Treasurer", photo: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/801200339_29004223205845380_2565040816093357390_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRAhRAGX3idUKyvNbDfNa8jzpfg7QwpDOPOl-DtDCkM5KSy8FM_uORGpEBG_XZDhBPAdvbLuSQG4QxFUFRD4FW&_nc_ohc=MC-kTrDL6aoQ7kNvwG-UYzS&_nc_oc=AdrKsynptjWl72R9ACDx2Lt15_Clx4laSRWJbnD3Oy__pE9sAuUbOmaIo0NoYL6aQpHHQ3Toukgw_Va2QIZTBE2r&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=pNs9WnRjJ23UNsNBSvYoTA&_nc_ss=7b2a8&oh=00_AQNYCSM5cPEp7jw6cjrgdda44O1yKVzBfLzOvyXM9_RgUQ&oe=6ACEAE98" },
        { name: "Francis Noe", position: "District Youth Leader", photo: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/626874935_26273689202319906_5955990311497092702_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGj5o7E7DU_HGgU5AJm_hUC0gSxpH5OpzjSBLGkfk6nONaZa_tf1QVLJDl3yfD2o8tZx29lYZKexVbFrv-K4KQW&_nc_ohc=df9u8CkaTwQQ7kNvwGctFZ5&_nc_oc=Adqo_8pRVkCO1XnKvaluuDYcTCEn_8nKajqC53PukebtKUGh__9fOR5c432UzBTjrT-4dMBATNRmRLQmwLM4-AVo&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=fMdJG8w3TuwJiERWeENN9Q&_nc_ss=7b2a8&oh=00_AQNDpa-bnGeew7juVqpAHcWL3CY5mBG5U4Ij-Zx8Bj-Krg&oe=6ACC1BB4" },
    ], //For District Officers
    [
        { name: "Maximo Famaran", position: "San Agustin Elder" },
        { name: "Danny Angelino", position: "Binongaan Elder" },
        { name: "Job Barolo", position: "Camantaya Elder" },
    ], //For Elders in San Agustin
    [
        { name: "Nenette Lorenzo", position: "Concepcion Norte Elder", photo: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/473054147_1175592760650054_6876257426040782697_n.jpg?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s750x750&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGtNoSwkWbBCWke1uEAVk5JaaofERfxdq9pqh8RF_F2r0tdWFy89iB2Mxp_Qkhy2fJvX5XQlKZ2-9BU-mEuRzgI&_nc_ohc=0zkwJ2B-xiQQ7kNvwEZH2kX&_nc_oc=Adpd0qUFR1vWrFriSqxeB4Mv0lAbNJAcB2wSulyH2Mj6WlJ00eqRdVAmACpN6oWOBKRcB5TgYLLjl9YRC82hx9tb&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=qQZqJukvOKCBBF-AcoNIIg&_nc_ss=7b2a8&oh=00_AQMSOfXPATVQ-pWAojNvOjVpS3SIWpxB0SeTNcp6t7lFeQ&oe=6ACC0DD0" },
        { name: "Gieraldine Visca", position: "Concepcion Sur Elder", photo: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/463618413_4693876934170961_7812467560921334839_n.jpg?stp=dst-jpg_tt6&cstp=mx953x960&ctp=s953x960&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeENT45INBlK5kh0VEFojU980vQbLQKRjrHS9BstApGOsdZ8d_CsJIrGRvn9aYyXMWRV67_9APmAMzTgB6R2VXtu&_nc_ohc=XIJulH0V0T8Q7kNvwF2LcKi&_nc_oc=AdoSBot8tWB_q-MBbnFZxbYTKQmT6KWmJXBVRAFnJift67CU45Z-93ggvwpoKonVOPNtflykQL9-C_7QbxGksL2W&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=kgvaZNlSGBBOCaMxJCGaOA&_nc_ss=7b2a8&oh=00_AQP252jC21dQdHOCcUq50kcqBva_28LtPwaPukKoJLjTEg&oe=6ACC1EFF" },
        { name: "Daniel Rio", position: "Concepcion Sur Elder" },
        { name: "Jester Francisco", position: "Paroyhog Elder", photo: "photos/jester.jpg" },
    ], //For Elders in Sta. Maria
];

const events = [
    {
        name: "Pathfinder Camping 2026",
        location: "San Agustin, Romblon",
        date: "2026-10-30 - 2026-11-02",
        theme: "Be prepared. Be adventurous. Be closer to God.",
    },
];

const announcements = [
    // {
    //     title: "Change of Venue for NTD-Wide Fellowship",
    //     important: true,
    //     posted: "2026-09-29",
    //     author: "Pastor Raymun Fajilan",
    // },
];

// Gallery: the first 4 show on the page, the rest appear in the viewer with a "+N" badge.
// Replace these file names with your own photos (e.g. "photos/gallery/1.jpg").
const galleryPhotos = [
    { src: "hello.jpg", alt: "Gallery photo 1" },
    { src: "programmer.jpg", alt: "Gallery photo 2" },
    { src: "q.jpg", alt: "Gallery photo 3" },
    { src: "r.jpg", alt: "Gallery photo 4" },
    { src: "world.jpg", alt: "Gallery photo 5" },
    { src: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/839972153_122183139950709496_6607933860894492310_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr29T9iuVU0DCUjxSzuyF4YIOBfi-XvkFgg4F-L5e-QZPslQeWjgN_hYqftwG3CNTlOrEYkxhCIZIlyO37fQ2r&_nc_ohc=5bT46QiWaXEQ7kNvwFwFpM5&_nc_oc=AdohqaLwUn-veBBLRb-H1JIv18OcsKHgjaV_XiJq0Et9as26k8knR3_0pefwxBQB19LzN2vOovQKOzC_0nZp3-0M&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=cH2bt1oMHHurntr1t4ebAQ&_nc_ss=7b2a8&oh=00_AQMfHNFajg3j8cI__Id3RB3pU4QolTFa5-QO4H90odQrwg&oe=6ACEA424", alt: "Gallery photo 6" },
    { src: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.99422-6/842529800_1093457363447714_4974055113352216725_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF1uc7RCLOy2gbUu_w1u3ijZwTasNHb9PlnBNqw0dv0-Zp98TBNgjZD5Br-ogRYTtsKKzIsMfCJpcOjsPVhfAbM&_nc_ohc=-2rSsSE5bcwQ7kNvwHWt6Kj&_nc_oc=AdoayzOVDsnC6pFyO06w68bpw4WawnIoDVr39fXuvbVCxUYVoxBqLCJlaS63Zpt9eAeyqcxPac9D8rJ1FZe3OKhe&_nc_zt=14&_nc_ht=scontent-mnl3-2.xx&_nc_gid=_dRWB30MdEYlwS_MsZ5ldg&_nc_ss=7b2a8&oh=00_AQNIVgjh7Ry_8lopbVGqYNQc-BvVw4hUBfsWwEedeWiV3A&oe=6ACFF0B6", alt: "Gallery photo 7" },
    { src: "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.99422-6/840901399_1132438455891278_4713986429394214681_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHviaXYDvvD9vBu1LXabwybSwshpnK2giFLCyGmcraCIYaU9hm2c3MRCRQfuk46L201fkW3ITMQX9i3zhGy-pnJ&_nc_ohc=CSnfbtz1wesQ7kNvwFGML8Q&_nc_oc=Ado9Al2bioL8ivsQcDRZj37Bzd0UsDEer4DctGFjqGR174FUCg1hbAXhnr2crfbgmVrYc4qfQdQxhHubEJ5Ohl49&_nc_zt=14&_nc_ht=scontent-mnl3-1.xx&_nc_gid=qyoPdePsApk82f4WArkAkg&_nc_ss=7b2a8&oh=00_AQMzs7_r8BIzDESfciOOyTuCTRghiwe6OB-quDhUjH6TKw&oe=6ACFEAD4"},
    { src: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.99422-6/841318815_2186466438915484_2392222880015637704_n.png?stp=dst-jpg_tt6&cstp=mx1226x1093&ctp=s1226x1093&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF_CVfhIX2lhXdBWheoZ2AisS2mHPbnF8uxLaYc9ucXy6cvIinIqCK8ipJomURMB6lPxlZCiMjlZjaC6Q-8l-76&_nc_ohc=WMBydDTSUXwQ7kNvwHAhUBO&_nc_oc=Adq1JODDFUKC7cAcsgDhwSUb5DrMvJk00jLgB9bYFvcSV4inacHA5stCjKFoIhe2yaq0RWmF2_zO4BKHMa7t5Wlb&_nc_zt=14&_nc_ht=scontent-mnl3-3.xx&_nc_gid=Sv1FWCDH51QePPFinkgiuw&_nc_ss=7b2a8&oh=00_AQMIca8SD3MROQsL9PmaiO9fCr0HYidAPuIK3q0WxLxIzw&oe=6AD00E4B"},
    { src: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.99422-6/843449577_1598893541237940_1920900862332825586_n.png?stp=dst-jpg_tt6&cstp=mx1962x1471&ctp=s1962x1471&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGIRwheIUX0H9XMIAqiO8_6OfonBUwOFQI5-icFTA4VAlgDOaedNaMRuH-uYxo5PMRmciSb0qbJTAxIkTy3Y5L3&_nc_ohc=GgovrTspV_8Q7kNvwHRtN6o&_nc_oc=AdpfoBLnQ_PkCetoakh4kMSPMnZTmFypKAWdLDsbmbxzGbB4xlAwrQSaAG0LyZXUB17YitrRfixodqbhR5p-5WPd&_nc_zt=14&_nc_ht=scontent-mnl1-1.xx&_nc_gid=wEBc_d3tyxI95LH9lNsr9w&_nc_ss=7b2a8&oh=00_AQPpOBVXdHuys3jHgX15VkwU1PcPgtY5cN9Y7Oisvvf3BA&oe=6ACFE4E8"},
    { src: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.99422-6/832557176_1445007384453678_7675377991227358155_n.png?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFDo1P9-J816_hOESt3I2lkxdg1zVukZQfF2DXNW6RlB3ITOQvHGTbbtrCCZnms4hVi2JTuRoWtxe9ZXYV4jiH6&_nc_ohc=nXp_lK0El_MQ7kNvwE18FsT&_nc_oc=Adq-m2bHpM5gQT01wYmYEGXLLc8aEmrSPHhU1B_qa05dyfrzji2kMZkCFP4TjzTixfAjEbwKHsDr7tKGUzcOHiyC&_nc_zt=14&_nc_ht=scontent-mnl1-2.xx&_nc_gid=Lcozlyc-TCTXVHIOGxfaVA&_nc_ss=7b2a8&oh=00_AQO0ln-bBySQq6sV9pjCLcvTmE2USuzHpdaHDh6VR2x7VA&oe=6AD00E3C"},
    { src: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.99422-6/832679081_27919478001062891_5371858892930039707_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF69q3F_9ci8vpFOwY6sdkr0hHPhiTrIFzSEc-GJOsgXICK722VWibXose8TKw06Xta3Z2kriM6WsOBMhYEbltn&_nc_ohc=yICblrfrNYQQ7kNvwEmEBzR&_nc_oc=AdqnpfxaweA0nOfR6BeqQCEUqTX3vFKm77UNF7Wm2nMOzpx6ZadQXIyFz4mtFmF2c6-LfKN-zHTWK_8UjmeF0guX&_nc_zt=14&_nc_ht=scontent-mnl3-2.xx&_nc_gid=ZuV-qk5lTdrhr2V5rip5iQ&_nc_ss=7b2a8&oh=00_AQNYKT-4kXeyzAHOCDOBtQwN8spF8OkF99YOBSXNYAJaLA&oe=6AD001CD"},
    { src: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.99422-6/832531782_1623488572748286_8032731643056312971_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFLDo33W1bj2-pQ9F3iJu__vTh-doMAoc29OH52gwChza8dgl8Hl9_AmYzxKb1WIZ82g5eJ2xoa-LJUz3mIZ48-&_nc_ohc=yIrlhEmYM9kQ7kNvwFqaDbW&_nc_oc=AdqPDUhQw-sPXWX0EVeF_mT4Q6TNn5R2_0TjmgxxxG5fxM8XM45KFaU-O3dyYZTbpZbtte-Su3WZq6wUp2y5R-jb&_nc_zt=14&_nc_ht=scontent-mnl1-2.xx&_nc_gid=9gVEOD_mINXSd3K_O9IbLQ&_nc_ss=7b2a8&oh=00_AQPy8f4Mdo0nGF1F6rLJHgGF_342HD1zAos27InKCPAt5A&oe=6AD000C0"},
    { src: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.99422-6/825278606_2069070827082450_4216063748778022323_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEFTZilgILRryONWfTawMPUIJcGa9GI7hgglwZr0YjuGNDHq1fk6bfEjql3cUW9dGgsUuQ_AXK_-EuckQP1KJ_9&_nc_ohc=4JbzB1WdLNsQ7kNvwHfiUoz&_nc_oc=AdryZeqtA1G4Tqwk3gIEcsB-r_cJUASWQO5vy-fXIFLbYStFdnZPkIHWbpgZsftyqWXe93HyV076hnnEa2I8pdFM&_nc_zt=14&_nc_ht=scontent-mnl3-3.xx&_nc_gid=yYxFXU4PuYZ46BCVbI7dPw&_nc_ss=7b2a8&oh=00_AQMavR3lObkhH0q1OfIuFQ0rkQTAdWv86RQbCdaZRcRPfA&oe=6AD010BA"},
    { src: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.99422-6/825340400_4522630901315932_7856153289801709880_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmpW9H3RRfkCdKB6-7MetEmDyNH5FQ4DmYPI0fkVDgOWM6_ZpDF62RYYaJ6HK5liZgcZrKmoC19gVtm2wxLl70&_nc_ohc=cuOWfzIN-ygQ7kNvwG0v6l_&_nc_oc=AdoNZ_d43Fuzac_fGhcUk4HYFSkxMk77eA9g9SCcQQbAGROgjwPa8qiK_OhXlh4llXmBmRGMUdNbh7jmmg3xwtLw&_nc_zt=14&_nc_ht=scontent-mnl3-3.xx&_nc_gid=_l3S_ahnGleZmTfwjJgKUQ&_nc_ss=7b2a8&oh=00_AQOy0EbQ8r7UK6R5he7C8128oyWJPImaggT-HaRdcCvpxA&oe=6AD019DD"},
    { src: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.99422-6/825340641_28117938944571892_6319038122951975640_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHv37o4LPuGvZ9j6yQZQwh_HKAGqPPm7DscoAao8-bsOzoV-oEMezolhRtR64tqORpmVi0Ne1l3bp9Wl_zGLuoJ&_nc_ohc=bzxNfCRhsBgQ7kNvwFRexL8&_nc_oc=AdpVANFLdWRVmwAI17LW3aNbiSgw0P_DWUkTlQB-Au8gR_ngPKJUAm6SDhhI0eMeOFMovqDYj-nAP8WPM2lhABFC&_nc_zt=14&_nc_ht=scontent-mnl1-2.xx&_nc_gid=yGUJym-soLm9eFKjejXSqA&_nc_ss=7b2a8&oh=00_AQPnAsqxyqkKH2SZKTh7JnI91pJo4ui09aBIWPBK4_l_DQ&oe=6ACFFA08"},
    { src: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.99422-6/825340797_1646117170429598_4823892697003246897_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEwpJSOuD1FI2gbU_N4gs8I2N9vRGfO7anY329EZ87tqbVUGuM2XCOtdm_YiP1LcyiiRl0uQyViDfDtTHrjEOWo&_nc_ohc=IWD4lwgCo1UQ7kNvwGhDEK6&_nc_oc=AdoYYuG5dwGi3Cpa9-4fJyIEouZTLrVUZL3n4PbwSx1RSIJNzArrJi0okiW3A3d6iIHChVWi7Bxglqk75qyx-UyB&_nc_zt=14&_nc_ht=scontent-mnl3-2.xx&_nc_gid=RAoT-I79cBoCASpx9BGt9A&_nc_ss=7b2a8&oh=00_AQNRckax-gbfSgQZj8d-joZjZpZvVnrfhEhV955TNu6N6g&oe=6AD00DC6"},
    { src: "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.99422-6/825278782_1067210496193316_6262651672845707698_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFf4RXcCmp2-z9bu8gJyn5j6u1Z9Nw2Q8jq7Vn03DZDyIZzjGnZJ_5cBv3H6xyxPPn8UHEO6C-CV5ndr5FEEQCD&_nc_ohc=h5dQyk3ulhwQ7kNvwFgcaZ6&_nc_oc=Adp5nCKCMlk2IlAzZIOanDOdzZ2w2zqQqEXZ_970wJpXZ7gWSyeFKq6KWAdxITVhTPaVTagd_jhraahzmjRBMJAQ&_nc_zt=14&_nc_ht=scontent-mnl3-1.xx&_nc_gid=T1g37k9fI8qlsc3nDqgOMA&_nc_ss=7b2a8&oh=00_AQOp29AmPLm48eeuG1VmP9m4_-NrLiqtSduSrmeIULgi0g&oe=6ACFF6DC"},
];

const MAX_VISIBLE = 4;

/* ---------- Helpers ---------- */

const $ = (selector) => document.querySelector(selector);

function el(tag, { className, text, attrs } = {}, children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    Object.entries(attrs ?? {}).forEach(([key, value]) => node.setAttribute(key, value));
    node.append(...children);
    return node;
}

const formatDate = (iso, options) =>
    new Date(iso).toLocaleDateString("en-PH", options);

const dateOnly = { year: "numeric", month: "long", day: "numeric" };

/* ---------- Renderers ---------- */

function renderOrgChart() {
    const root = $("#orgChartRoot");
    orgChart.forEach((row) => {
        const rowEl = el("div", { className: "orgRow" });
        row.forEach(({ name, position, photo }) => {
            const vacant = !name;
            rowEl.append(
                el("div", { className: `officer${vacant ? " vacant" : ""}` }, [
                    el("img", {
                        attrs: {
                            src: photo ?? PLACEHOLDER_PHOTO,
                            alt: vacant ? "" : `Photo of ${name}`,
                            loading: "lazy",
                        },
                    }),
                    el("p", { className: "name", text: vacant ? "To be announced" : name }),
                    el("p", { className: "position", text: position }),
                ])
            );
        });
        root.append(rowEl);
    });
}

function renderEvents() {
    const list = $("#eventList");
    const now = new Date();
    const startOf = (event) => new Date(event.date.split(" - ")[0]);

    const upcoming = events
        .filter((event) => startOf(event) >= now)
        .sort((a, b) => startOf(a) - startOf(b));

    if (!upcoming.length) {
        list.replaceWith(el("p", { className: "empty", text: "No upcoming events. Please check back soon." }));
        return;
    }

    upcoming.forEach(({ name, location, date, theme }) => {
        const [start, end] = date.split(" - ");
        const dateString = end
            ? `${formatDate(start, dateOnly)} to ${formatDate(end, dateOnly)}`
            : formatDate(start, dateOnly);

        list.append(
            el("article", { className: "eventCard" }, [
                el("h3", { text: name }),
                el("p", { text: `Location: ${location}` }),
                el("p", { text: `When: ${dateString}` }),
                el("p", { text: `Theme: "${theme}"` }),
            ])
        );
    });

    const firstStart = upcoming[0].date.split(" - ")[0];
    $("#nextEvent").textContent = `${upcoming[0].name} - ${formatDate(firstStart, dateOnly)}`;
}

function renderAnnouncements() {
    const list = $("#announcementList");

    if (!announcements.length) {
        list.append(el("p", { className: "empty", text: "No announcements yet." }));
        return;
    }

    const sorted = [...announcements].sort((a, b) => new Date(b.posted) - new Date(a.posted));
    sorted.forEach(({ title, important, posted, author }) =>
        list.append(
            el("article", { className: "announcement" }, [
                ...(important ? [el("span", { className: "tag", text: "Important" })] : []),
                el("h3", { text: title }),
                el("small", { text: `Posted ${formatDate(posted, dateOnly)}` }),
                el("small", { text: `By ${author}` }),
            ])
        )
    );

    $("#latestAnnouncement").textContent = sorted[0].title;
}

/* ---------- Gallery + lightbox ---------- */

let currentPhoto = 0;
let lastFocused = null;

function renderGallery() {
    const grid = $("#galleryGrid");

    if (!galleryPhotos.length) {
        grid.replaceWith(el("p", { className: "empty", text: "No photos yet." }));
        return;
    }

    const remaining = galleryPhotos.length - MAX_VISIBLE;

    galleryPhotos.slice(0, MAX_VISIBLE).forEach((photo, i) => {
        const children = [el("img", { attrs: { src: photo.src, alt: photo.alt, loading: "lazy" } })];

        // Only the last visible photo shows "+N"
        if (i === MAX_VISIBLE - 1 && remaining > 0) {
            children.push(el("span", { className: "moreOverlay", text: `+${remaining}` }));
        }

        const item = el("button", {
            className: "galleryItem",
            attrs: { type: "button", "aria-label": `Open photo ${i + 1} of ${galleryPhotos.length}` },
        }, children);

        item.addEventListener("click", () => openLightbox(i));
        grid.append(item);
    });
}

function showPhoto(index) {
    const total = galleryPhotos.length;
    currentPhoto = (index + total) % total;
    $("#lbImg").src = galleryPhotos[currentPhoto].src;
    $("#lbImg").alt = galleryPhotos[currentPhoto].alt;
    $("#lbCount").textContent = `${currentPhoto + 1} / ${total}`;
}

function openLightbox(index) {
    lastFocused = document.activeElement;
    showPhoto(index);
    $("#lightbox").classList.add("open");
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
}

function closeLightbox() {
    $("#lightbox").classList.remove("open");
    document.body.style.overflow = "";
    lastFocused?.focus();
}

function setupLightbox() {
    const box = $("#lightbox");

    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", () => showPhoto(currentPhoto - 1));
    $("#lbNext").addEventListener("click", () => showPhoto(currentPhoto + 1));
    box.addEventListener("click", (e) => e.target === box && closeLightbox());

    document.addEventListener("keydown", (e) => {
        if (!box.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPhoto(currentPhoto - 1);
        if (e.key === "ArrowRight") showPhoto(currentPhoto + 1);
    });

    // Swipe on phones
    let startX = 0;
    box.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
    box.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) showPhoto(currentPhoto + (dx < 0 ? 1 : -1));
    });
}

/* ---------- Mobile menu ---------- */

function setupMenu() {
    const sidebar = $("#sidebar");
    const toggle = $("#menuToggle");

    const setOpen = (open) => {
        sidebar.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open);
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => setOpen(!sidebar.classList.contains("open")));
    sidebar.addEventListener("click", (e) => e.target.closest("a") && setOpen(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));

    // Tap anywhere outside the sidebar to close it (the menu button is hidden while open)
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
            setOpen(false);
        }
    });
}

/* ---------- Highlight the current section in the sidebar ---------- */

function setupActiveLink() {
    // Only in-page links (#section); the Sermon page link is skipped
    const links = new Map(
        [...document.querySelectorAll("#sidebar nav a[href^='#']")].map((a) => [a.getAttribute("href").slice(1), a])
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.filter((e) => e.isIntersecting).forEach((entry) => {
                links.forEach((a) => a.classList.remove("active"));
                links.get(entry.target.id)?.classList.add("active");
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );

    links.forEach((_, id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}

/* ---------- Skeleton loading ---------- */

// Shimmer on every image until it has loaded (works for lazy images too)
function setupImageSkeletons() {
    document.querySelectorAll("img:not(#lbImg)").forEach((img) => {
        if (img.complete && img.naturalWidth > 0) return; // already loaded

        img.classList.add("skel");
        const done = () => img.classList.remove("skel");
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
    });
}

// Full-page skeleton: stays at least 0.8s, leaves once the page and hero image
// have loaded, and never stays longer than 7s even on a very slow connection
function setupPageSkeleton() {
    const overlay = $("#pageSkeleton");
    if (!overlay) return;

    const MIN_MS = 800;
    const MAX_MS = 7000;
    const started = performance.now();

    const heroImage = new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = resolve;
        img.src = "photos/image.png";
    });

    const pageLoaded = document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));

    const timeout = new Promise((resolve) => setTimeout(resolve, MAX_MS));

    Promise.race([Promise.all([heroImage, pageLoaded]), timeout]).then(() => {
        const wait = Math.max(0, MIN_MS - (performance.now() - started));
        setTimeout(() => {
            overlay.classList.add("done");
            document.body.classList.remove("isLoading");
            setTimeout(() => overlay.remove(), 500);
        }, wait);
    });
}

/* ---------- Init ---------- */

renderOrgChart();
renderEvents();
renderAnnouncements();
renderGallery();
setupImageSkeletons(); // after the renderers, so the images they create get a shimmer too
setupPageSkeleton();
setupMenu();
setupLightbox();
setupActiveLink();
