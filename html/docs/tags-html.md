## Documentação de Tags HTML: b, strong, em, span, h1-h5

### `<b>`

Exibe o texto em negrito, mas sem indicar importância semântica.

**Exemplo 1:**

```html
<p>Este é um texto <b>em negrito</b> apenas visualmente.</p>
```

**Exemplo 2:**

```html
<b>Aviso:</b> Use máscara ao sair de casa.
```

---

### `<strong>`

Exibe o texto em negrito e indica que o conteúdo é importante (semântica de ênfase).

**Exemplo 1:**

```html
<p>Este é um texto <strong>muito importante</strong> para o usuário.</p>
```

**Exemplo 2:**

```html
<strong>Atenção!</strong> Dados sensíveis à mostra.
```

---

### Diferença entre `<b>` e `<strong>`

- `<b>`: apenas visual, sem significado semântico.
- `<strong>`: visual + semântica de importância (usado por leitores de tela, SEO etc).

---

### `<em>`

Exibe o texto em itálico e indica ênfase semântica.

**Exemplo 1:**

```html
<p>Você <em>precisa</em> estudar para passar.</p>
```

**Exemplo 2:**

```html
<em>Observação:</em> O prazo termina amanhã.
```

---

### `<span>`

Usado para agrupar e aplicar estilos a partes do texto, sem significado semântico.

**Exemplo 1:**

```html
<span style="color: red;">Texto em vermelho</span>
```

**Exemplo 2:**

```html
<p>Olá, <span class="destaque">usuário</span>!</p>
```

---

### Família `<h1>` a `<h5>`

Usadas para títulos e subtítulos, com hierarquia de importância (h1 = mais importante).

**Exemplo 1:**

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>
```

**Exemplo 2:**

```html
<h1>Receita de Bolo</h1>
<h2>Ingredientes</h2>
<h3>Modo de Preparo</h3>
<h4>Dicas</h4>
<h5>Notas Finais</h5>
```

---

### Diferença entre `<em>`, `<span>` e família `<h1>`-`<h5>`

- `<em>`: ênfase semântica (itálico).
- `<span>`: agrupamento/estilização, sem semântica.
- `<h1>`-`<h5>`: títulos e estrutura do documento, com semântica e hierarquia.
