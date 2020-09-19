module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  extends: [
    'plugin:react/recommended',
    // 'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "func-style": [
      "error",
      "declaration",
      { "allowArrowFunctions": true }
    ],
    "indent": [
      "error",
      2
    ],
    "require-await": "error",
    "no-extra-semi": "error",
    "semi": ["error", "always"],
    "prefer-const": "warn", // cuando es array permite no inhabilita el ponerle permisos
    "no-async-promise-executor": "off", // funcion con comentario simple
    "no-const-assign": "error",// "error" 
    "no-undef": "warn",
    "no-useless-escape": "off",
    "no-shadow-restricted-names": "error",
    "array-bracket-newline": ["error", "consistent"],
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }], // esta linea es DIOS cuando hago un destructuring
    // para eliminar propiedades puedo asignar variables para eliminarlas y no salta el error de miss declaration
    "no-param-reassign": ["error", { "props": true }], // esto va para los maps para que siempre se creen nuevos objetos
    //  los de props es como decir objeto.atributo si pongo props true es que no quiero que modifique el objeto
    "no-return-assign": "error" // esto es para que no pueda estar haciendo una asignacion en un return

  },
};
