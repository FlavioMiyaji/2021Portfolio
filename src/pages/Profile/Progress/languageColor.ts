const languageColor = [
  { language: 'Mercury', color: '#ff2b2b' },
  { language: 'TypeScript', color: '#2b7489' },
  { language: 'PureBasic', color: '#5a6986' },
  { language: 'Objective-C++', color: '#6866fb' },
  { language: 'Self', color: '#0579aa' },
  { language: 'NewLisp', color: '#87AED7' },
  { language: 'Fortran', color: '#4d41b1' },
  { language: 'Ceylon', color: '#dfa535' },
  { language: 'Rebol', color: '#358a5b' },
  { language: 'Frege', color: '#00cafe' },
  { language: 'AspectJ', color: '#a957b0' },
  { language: 'Omgrofl', color: '#cabbff' },
  { language: 'HolyC', color: '#ffefaf' },
  { language: 'Shell', color: '#89e051' },
  { language: 'HiveQL', color: '#dce200' },
  { language: 'AppleScript', color: '#101F1F' },
  { language: 'Eiffel', color: '#946d57' },
  { language: 'XQuery', color: '#5232e7' },
  { language: 'RUNOFF', color: '#665a4e' },
  { language: 'RAML', color: '#77d9fb' },
  { language: 'MTML', color: '#b7e1f4' },
  { language: 'Elixir', color: '#6e4a7e' },
  { language: 'SAS', color: '#B34936' },
  { language: 'MQL4', color: '#62A8D6' },
  { language: 'MQL5', color: '#4A76B8' },
  { language: 'Agda', color: '#315665' },
  { language: 'wisp', color: '#7582D1' },
  { language: 'Dockerfile', color: '#384d54' },
  { language: 'SRecode Template', color: '#348a34' },
  { language: 'D', color: '#ba595e' },
  { language: 'PowerBuilder', color: '#8f0f8d' },
  { language: 'Kotlin', color: '#F18E33' },
  { language: 'Opal', color: '#f7ede0' },
  { language: 'TI Program', color: '#A0AA87' },
  { language: 'Crystal', color: '#000100' },
  { language: 'Objective-C', color: '#438eff' },
  { language: 'Batchfile', color: '#C1F12E' },
  { language: 'Oz', color: '#fab738' },
  { language: 'Mirah', color: '#c7a938' },
  { language: 'ZIL', color: '#dc75e5' },
  { language: 'Objective-J', color: '#ff0c5a' },
  { language: 'ANTLR', color: '#9DC3FF' },
  { language: 'Roff', color: '#ecdebe' },
  { language: 'Ragel', color: '#9d5200' },
  { language: 'FreeMarker', color: '#0050b2' },
  { language: 'Gosu', color: '#82937f' },
  { language: 'Zig', color: '#ec915c' },
  { language: 'Ruby', color: '#701516' },
  { language: 'Nemerle', color: '#3d3c6e' },
  { language: 'Jupyter Notebook', color: '#DA5B0B' },
  { language: 'Component Pascal', color: '#B0CE4E' },
  { language: 'Nextflow', color: '#3ac486' },
  { language: 'Brainfuck', color: '#2F2530' },
  { language: 'SystemVerilog', color: '#DAE1C2' },
  { language: 'APL', color: '#5A8164' },
  { language: 'Hack', color: '#878787' },
  { language: 'Go', color: '#00ADD8' },
  { language: 'Ring', color: '#2D54CB' },
  { language: 'PHP', color: '#4F5D95' },
  { language: 'Cirru', color: '#ccccff' },
  { language: 'SQF', color: '#3F3F3F' },
  { language: 'ZAP', color: '#0d665e' },
  { language: 'Glyph', color: '#c1ac7f' },
  { language: '1C Enterprise', color: '#814CCC' },
  { language: 'WebAssembly', color: '#04133b' },
  { language: 'Java', color: '#b07219' },
  { language: 'MAXScript', color: '#00a6a6' },
  { language: 'Scala', color: '#c22d40' },
  { language: 'Makefile', color: '#427819' },
  { language: 'Perl', color: '#0298c3' },
  { language: 'Jsonnet', color: '#0064bd' },
  { language: 'Arc', color: '#aa2afe' },
  { language: 'LLVM', color: '#185619' },
  { language: 'GDScript', color: '#355570' },
  { language: 'Verilog', color: '#b2b7f8' },
  { language: 'Factor', color: '#636746' },
  { language: 'Haxe', color: '#df7900' },
  { language: 'Forth', color: '#341708' },
  { language: 'Red', color: '#f50000' },
  { language: 'YARA', color: '#220000' },
  { language: 'Hy', color: '#7790B2' },
  { language: 'mcfunction', color: '#E22837' },
  { language: 'Volt', color: '#1F1F1F' },
  { language: 'AngelScript', color: '#C7D7DC' },
  { language: 'LSL', color: '#3d9970' },
  { language: 'eC', color: '#913960' },
  { language: 'Terra', color: '#00004c' },
  { language: 'CoffeeScript', color: '#244776' },
  { language: 'HTML', color: '#e34c26' },
  { language: 'Lex', color: '#DBCA00' },
  { language: 'UnrealScript', color: '#a54c4d' },
  { language: 'Idris', color: '#b30000' },
  { language: 'Swift', color: '#ffac45' },
  { language: 'Modula-3', color: '#223388' },
  { language: 'C', color: '#555555' },
  { language: 'AutoHotkey', color: '#6594b9' },
  { language: 'P4', color: '#7055b5' },
  { language: 'Isabelle', color: '#FEFE00' },
  { language: 'G-code', color: '#D08CF2' },
  { language: 'Metal', color: '#8f14e9' },
  { language: 'Clarion', color: '#db901e' },
  { language: 'Vue', color: '#2c3e50' },
  { language: 'JSONiq', color: '#40d47e' },
  { language: 'Boo', color: '#d4bec1' },
  { language: 'AutoIt', color: '#1C3552' },
  { language: 'Genie', color: '#fb855d' },
  { language: 'Clojure', color: '#db5855' },
  { language: 'EQ', color: '#a78649' },
  { language: 'Visual Basic', color: '#945db7' },
  { language: 'CSS', color: '#563d7c' },
  { language: 'Prolog', color: '#74283c' },
  { language: 'SourcePawn', color: '#5c7611' },
  { language: 'AMPL', color: '#E6EFBB' },
  { language: 'Shen', color: '#120F14' },
  { language: 'wdl', color: '#42f1f4' },
  { language: 'Harbour', color: '#0e60e3' },
  { language: 'Yacc', color: '#4B6C4B' },
  { language: 'Tcl', color: '#e4cc98' },
  { language: 'Quake', color: '#882233' },
  { language: 'BlitzMax', color: '#cd6400' },
  { language: 'PigLatin', color: '#fcd7de' },
  { language: 'xBase', color: '#403a40' },
  { language: 'Lasso', color: '#999999' },
  { language: 'Processing', color: '#0096D8' },
  { language: 'VHDL', color: '#adb2cb' },
  { language: 'Elm', color: '#60B5CC' },
  { language: 'Dhall', color: '#dfafff' },
  { language: 'Propeller Spin', color: '#7fa2a7' },
  { language: 'Rascal', color: '#fffaa0' },
  { language: 'Alloy', color: '#64C800' },
  { language: 'IDL', color: '#a3522f' },
  { language: 'Slice', color: '#003fa2' },
  { language: 'YASnippet', color: '#32AB90' },
  { language: 'ATS', color: '#1ac620' },
  { language: 'Ada', color: '#02f88c' },
  { language: 'Nu', color: '#c9df40' },
  { language: 'LFE', color: '#4C3023' },
  { language: 'SuperCollider', color: '#46390b' },
  { language: 'Oxygene', color: '#cdd0e3' },
  { language: 'ASP', color: '#6a40fd' },
  { language: 'Assembly', color: '#6E4C13' },
  { language: 'Gnuplot', color: '#f0a9f0' },
  { language: 'FLUX', color: '#88ccff' },
  { language: 'C#', color: '#178600' },
  { language: 'Turing', color: '#cf142b' },
  { language: 'Vala', color: '#fbe5cd' },
  { language: 'ECL', color: '#8a1267' },
  { language: 'ObjectScript', color: '#424893' },
  { language: 'NetLinx', color: '#0aa0ff' },
  { language: 'Perl 6', color: '#0000fb' },
  { language: 'MATLAB', color: '#e16737' },
  { language: 'Emacs Lisp', color: '#c065db' },
  { language: 'Stan', color: '#b2011d' },
  { language: 'SaltStack', color: '#646464' },
  { language: 'Gherkin', color: '#5B2063' },
  { language: 'QML', color: '#44a51c' },
  { language: 'Pike', color: '#005390' },
  { language: 'DataWeave', color: '#003a52' },
  { language: 'LOLCODE', color: '#cc9900' },
  { language: 'ooc', color: '#b0b77e' },
  { language: 'XSLT', color: '#EB8CEB' },
  { language: 'XC', color: '#99DA07' },
  { language: 'J', color: '#9EEDFF' },
  { language: 'Mask', color: '#f97732' },
  { language: 'EmberScript', color: '#FFF4F3' },
  { language: 'TeX', color: '#3D6117' },
  { language: 'Pep8', color: '#C76F5B' },
  { language: 'R', color: '#198CE7' },
  { language: 'Cuda', color: '#3A4E3A' },
  { language: 'KRL', color: '#28430A' },
  { language: 'Vim script', color: '#199f4b' },
  { language: 'Lua', color: '#000080' },
  { language: 'Asymptote', color: '#4a0c0c' },
  { language: 'Ren\'Py', color: '#ff7f7f' },
  { language: 'Golo', color: '#88562A' },
  { language: 'PostScript', color: '#da291c' },
  { language: 'Fancy', color: '#7b9db4' },
  { language: 'OCaml', color: '#3be133' },
  { language: 'ColdFusion', color: '#ed2cd6' },
  { language: 'Pascal', color: '#E3F171' },
  { language: 'F#', color: '#b845fc' },
  { language: 'API Blueprint', color: '#2ACCA8' },
  { language: 'ActionScript', color: '#882B0F' },
  { language: 'F*', color: '#572e30' },
  { language: 'Fantom', color: '#14253c' },
  { language: 'Zephir', color: '#118f9e' },
  { language: 'Click', color: '#E4E6F3' },
  { language: 'Smalltalk', color: '#596706' },
  { language: 'Ballerina', color: '#FF5000' },
  { language: 'DM', color: '#447265' },
  { language: 'Ioke', color: '#078193' },
  { language: 'PogoScript', color: '#d80074' },
  { language: 'LiveScript', color: '#499886' },
  { language: 'JavaScript', color: '#f1e05a' },
  { language: 'Wollok', color: '#a23738' },
  { language: 'Rust', color: '#dea584' },
  { language: 'ABAP', color: '#E8274B' },
  { language: 'ZenScript', color: '#00BCD1' },
  { language: 'Slash', color: '#007eff' },
  { language: 'Erlang', color: '#B83998' },
  { language: 'Pan', color: '#cc0000' },
  { language: 'LookML', color: '#652B81' },
  { language: 'Scheme', color: '#1e4aec' },
  { language: 'Squirrel', color: '#800000' },
  { language: 'Nim', color: '#37775b' },
  { language: 'Python', color: '#3572A5' },
  { language: 'Max', color: '#c4a79c' },
  { language: 'Solidity', color: '#AA6746' },
  { language: 'Common Lisp', color: '#3fb68b' },
  { language: 'Dart', color: '#00B4AB' },
  { language: 'Nix', color: '#7e7eff' },
  { language: 'Nearley', color: '#990000' },
  { language: 'Nit', color: '#009917' },
  { language: 'Chapel', color: '#8dc63f' },
  { language: 'Groovy', color: '#e69f56' },
  { language: 'Dylan', color: '#6c616e' },
  { language: 'E', color: '#ccce35' },
  { language: 'Parrot', color: '#f3ca0a' },
  { language: 'Grammatical Framework', color: '#79aa7a' },
  { language: 'Game Maker Language', color: '#71b417' },
  { language: 'VCL', color: '#148AA8' },
  { language: 'Papyrus', color: '#6600cc' },
  { language: 'C++', color: '#f34b7d' },
  { language: 'NetLinx+ERB', color: '#747faa' },
  { language: 'Common Workflow Language', color: '#B5314C' },
  { language: 'Clean', color: '#3F85AF' },
  { language: 'X10', color: '#4B6BEF' },
  { language: 'Puppet', color: '#302B6D' },
  { language: 'Jolie', color: '#843179' },
  { language: 'PLSQL', color: '#dad8d8' },
  { language: 'sed', color: '#64b970' },
  { language: 'Pawn', color: '#dbb284' },
  { language: 'Standard ML', color: '#dc566d' },
  { language: 'PureScript', color: '#1D222D' },
  { language: 'Julia', color: '#a270ba' },
  { language: 'nesC', color: '#94B0C7' },
  { language: 'q', color: '#0040cd' },
  { language: 'Haskell', color: '#5e5086' },
  { language: 'NCL', color: '#28431f' },
  { language: 'Io', color: '#a9188d' },
  { language: 'Rouge', color: '#cc0088' },
  { language: 'Racket', color: '#3c5caa' },
  { language: 'NetLogo', color: '#ff6375' },
  { language: 'AGS Script', color: '#B9D9FF' },
  { language: 'Meson', color: '#007800' },
  { language: 'Dogescript', color: '#cca760' },
  { language: 'PowerShell', color: '#012456' },

  { language: 'NodeJS', color: '#f1e05a' },
  { language: 'React Native', color: '#2b7489' },
  { language: 'ReactJS', color: '#2b7489' },
  { language: 'PostgresSQL', color: '#dad8d8' },
  { language: 'SQLite', color: '#dad8d8' },
];

export default languageColor;