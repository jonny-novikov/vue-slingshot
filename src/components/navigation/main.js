const tpl = `<!-- Main -->
<div class="navigation__list">

  <div class="navigation__list__header" role="button" data-toggle="collapse" href="#main" aria-expanded="true"
       aria-controls="main">
    Main
  </div>

  <div class="collapse in" id="main">

    <a href="#" class="navigation__list__item">
      <i class="ion-ios-browsers"></i>
      <span>Browse</span>
    </a>

    <a href="#" class="navigation__list__item">
      <i class="ion-person-stalker"></i>
      <span>Activity</span>
    </a>

    <a href="#" class="navigation__list__item">
      <i class="ion-radio-waves"></i>
      <span>Radio</span>
    </a>

  </div>

</div>
`;

export default {
  template: tpl
}
