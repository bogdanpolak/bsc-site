# BSC Site

Próbna strona zbudowana w oparciu o statyczny generator stron WWW - Jekyll.

![](assets/svg2/jekyll.svg)

Więcej informacji: https://jekyllrb.com/

## Instalacja

Jekyll: https://jekyllrb.com/docs/installation/

Install all required gems (after repository clone):
```sh
bundle install
```

## Uruchomienie

```sh
bundle exec jekyll serve
```
Z opcją LiveReload:
```sh
bundle exec jekyll serve --livereload
```

### Uwagi dla Windows

Uruchomienie trybu LiveReload wymaga przeinstalowania gem-u EventMachine:
```sh
gem uninstall eventmachine --force
gem install eventmachine --platform ruby
```
