{ pkgs }:

let
  nodejs = pkgs.nodejs.override {
    package = pkgs.nodejs-22;
  };
in
pkgs.mkShell {
  buildInputs = [
    nodejs
    pkgs.pnpm
  ];
}