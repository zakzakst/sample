'use strict';

import $ from 'jquery';
import 'lightbox2';

import { Loader } from './_module/loader';
import { FooterGoTop } from './_module/footer-go-top';
import { AnchorScroll } from './_module/anchor-scroll';
import { Header2 } from './_module/header2';

// ページ表示アニメーション
(() => {
  const loader = new Loader('js-loader', () => {
    // TODO: オープンアニメーションを追加
    // ローダーを閉じた後の挙動を記載
  });
  // データ読み込み完了後、ローダーを閉じる
  window.onload = () => {
    setTimeout(() => {
      loader.closeLoader();
    }, 400);
  }
})();

// トップへ戻るスクリプトの実行
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();

// ページ内リンクスクリプトの実行
(() => {
  const anchorScroll = new AnchorScroll('js-anchor-scroll');
  anchorScroll.init();
})();

// ヘッダースクリプトの実行
(() => {
  const header2 = new Header2(
    'js-header',
    'js-hero-nav',
    'js-hero-nav-activate'
  );
  header2.init();
})();
