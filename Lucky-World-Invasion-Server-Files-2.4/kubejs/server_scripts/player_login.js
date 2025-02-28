PlayerEvents.loggedIn((event) => {
  const { player } = event;
  player.tell(
    Text.translate('%s[%s]%s', [
      Text.translate('message.kubejs.login.text.0'),
      Text.yellow(Text.translate('kubejs.title')),
      Text.translate('message.kubejs.login.text.1'),
    ])
  );
});
