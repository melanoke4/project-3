const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_51GyLRCCbwzanfjldsDhvr00ShB6ghrqHjZICRolWCFh5IhItcR0oX7ylL8HYIPvDDtjTk58VgFM3q9e3pgrcCaVV00kfmvCBRw';

export default STRIPE_PUBLISHABLE;