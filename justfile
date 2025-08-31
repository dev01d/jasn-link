
default: dependencies

alias deps := dependencies

dependencies:
  yarn install

dev:
  yarn run dev

build:
  yarn run build
