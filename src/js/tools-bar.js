const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

function OnChangeThemeSwitch() {
  switch (getTheme()) {
    case LIGHT:
      //   console.log('Установлена белая тема -> меняем на чорную');
      setTheme(DARK);
      break;

    case DARK:
      //   console.log('Установлена черная тема -> меняем на белую');
      setTheme(LIGHT);

      break;

    default:
      console
        .log
        // 'Тема не установлена - меняем тему белую по ДЕФОЛТУ на черную',
        ();
      setTheme(DARK);
  }
}

function getTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) return theme;
}

function setTheme(theme) {
  if (theme === DARK) {
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  } else {
    document.body.classList.remove(DARK);
    localStorage.setItem('theme', LIGHT);
  }
}

////// RUN //////

const themeSwitchRef = document.getElementById('theme-switch-toggle');

document.body.classList.add('light-theme');
themeSwitchRef.addEventListener('change', OnChangeThemeSwitch);

if (getTheme() === DARK) {
  document.body.classList.add(DARK);
  themeSwitchRef.checked = true;
}
