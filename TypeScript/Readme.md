# Apa itu TypeScript
Pendeknya, TypeScript adalah "versi type statis dari JavaScript". Mengutip dari keterangan TypeScript dari website resminya.

TypeScript adalah JavaScript dengan syntax untuk type.
- TypeScript menambahkan syntax tambahan ke JavaScript untuk mendukung integrasi yang erat dengan editor Anda. Menangkap error-error lebih awal dalam editor.
- Code TypeScript akan diubah ke JavaScript, yang mana bisa berjalan dimanapun JavaScript bisa berjalan: Dalam sebuah browser, pada Node.js atau Deno dan dalam aplikasi kita.
- TypeScript mengerti JavaScript dan menggunakan type inference untuk memberikan tool yang hebat tanpa code tambahan.

Baiklah, jadi TypeScript bisa digunakan dengan cara yang sama seperti JavaScript dan perbedaannya adalah kita bisa menambahkan "types" ke code JavaScript ya.

Betul. Konsep "Type" sangatlah penting dalam bahasa pemrograman dan terdapat 2 (dua) kategori bahasa terkait "Type".

- Bahasa Yang Diketik Secara Statis (Statically Typed Language) : C, Java, Go dan lainnya
- Bahasa Yang Diketik Secara Dinamis (Dynamically Typed Language): JavaScript, Python, PHP dan lainnya

- Java
`String name = "Ken";
int number = 3;
System.out.println(name + " jumped " + number + " times");

// hasil: "Ken jumped 3 times"`

- JavaScript
`const name = "Ken";
const number = 3;
console.log(name + " jumped " + number + " times");

// hasil: "Ken jumped 3 times"`

Seperti itulah, kita perlu menyebutkan type ketika mendeklarasikan variable dalam Java. Jika kita menetapkan nilai dari type yang berbeda, maka code akan memunculkan error.
`String name = 5;

// hasil: Error`

Di sisi lain, sebuah error tidak akan muncul dalam JavaScript ketika kita melakukan hal yang sama.
`const name = 5

// hasil: Tidak ada error. 5 telah ditetapkan pada constant "name"`

Meskipun bahasa yang dituliskan secara dinamis tidak memiliki proses compile dan lebih mudah menjalankan code, error yang tidak terduga bisa saja terjadi sebab penetapan nilai yang salah yang tidak menyebabkan error ketika dilakukan penetapan. Mari perhatikan code React di bawah ini.

`const Counter = ({ number }) => {
  return (
    <div>
      <h1>How many times Ninja Ken jumped?</h1>
      <p>Ninja Ken jumped {number} times</p>
    </div>
  )
}

const App = () => {
  const number = { ken: 3, guruDomba: 5 }

  return (
    <div>
      <Counter number={number} />
    </div>
  )
}

export default App`

Code untuk component Counter tidak tampak aneh sama sekali, tapi code ini akan menyebabkan error sebab nilai yang ditetapkan dalam constant number pada component App merupakan sebuah object { ken: 3, guruDomba: 5 }.

Ketika aplikasi bertamabah besar dan terbagi dalam beberapa component, sangat mudah sekali terjadi hasil yang tidak terduga. Permasalahannya adalah code dalam sebuah component tampak baik-baik saja namun nilai yang diberikan dari component lain tidak dipastikan memiliki type yang diharapkan.

Oh begitu. Sekarang saya mengerti bahwa type sangatlah penting!

Baik. Seraya perkembangan teknologi di ranah Frontend berkembang, code untuk Frontend cenderung menjadi lebih besar daripada sebelumnya dan banyak developer mulai merasa tertekan mengenai bahwa type tidak dipastikan dalam code JavaScript.

Itulah alasan kenapa TypeScript ditemukan ya!

Benar. Code di atas untuk component Counter bisa digantikan dengan code berikut ini ketika menggunakan TypeScript.

`const Counter = ({ number }: Number) => {
  return (
    <div>
      <h1>How many times Ninja Ken jumped?</h1>
      <p>Ninja Ken jumpted {number} times</p>
    </div>
  )
}`

Dengan type annotation ({ number }: Number), ini akan memberitahukan dengan segera apakah number yang diteruskan dari component lain tidak memilki nilai dengan type number.

# Type JavaScript
Dalam bahasa JavaScript, type data dikategorikan menjadi 2 (dua) type, yaitu:
- Type "Primitive": string, number, boolean, bigint, symbol, undefined, null
- Type "Object"

Ketika menggunakan method typeof, kita akan melihat type dari sebuah nilai:

`// Type Primitive
console.log(typeof("Ninja Ken")) // hasil: string
console.log(typeof(7)) // hasil: number
console.log(typeof(true)) // hasil: boolean
console.log(typeof(9007199254740991n)) // hasil: bigint
console.log(typeof(Symbol("Symbol"))) // hasil: symbol
console.log(typeof(undefined)) // hasil: undefined
console.log(typeof(null)) // hasil: object
`

`// Type Object
console.log(typeof([1, 2, 3])) // hasil: object
console.log(typeof({ken: 1, guru: 2})) // hasil: object`

※ Hasil dari typeof(null) dianggap sebagai sebuah bug sebab hasilnya tidak benar yaitu menganggap null merupakan object, namun tidak terperbaikai karena alasan kompabilitas.


## BigInt
BigInt merupakan sebuah type untuk menyimpan angka integer yang besar sebab type Number memiliki nilai batas maximum dan minimum yang bisa ditangani dengan benar dan itu terdefinisikan sebagai MAX_SAFE_INTEGER dan MIN_SAFE_INTEGER.

`console.log(Number.MAX_SAFE_INTEGER) // hasil: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // hasil: -9007199254740991`

Jika menggunakan angka yang lebih besar atau lebih kecil sebagai type Number, JavaScript akan menghasilkan hasil yang tidak terduga. Sebagai contoh, hasil dari code di bawah ini seharusnya bernilai return false, tapi malah bernilai return true.

`console.log(9007199254740992 === 9007199254740993) // hasil: true`

Untuk menangani angka yang besar-besar, kita bisa menggunakan type BigInt seperti ini:
`console.log(9007199254740992n === 9007199254740993n) // hasil: false

// or 

console.log(BigInt("9007199254740992") === BigInt("9007199254740993")) // hasil: false`

Type BigInt type of values bisa didefinisikan dengan "menambahkan akhiran n" atau BigInt("number").

## Symbol
Symbol merupakan type untuk menghasilkan nilai-nilai yang unik.

`const symbol1 = Symbol("Ninja Ken");
const symbol2 = Symbol("Ninja Ken");
console.log(symbol1 === symbol2) // hasil: false`

## Variable
Ketika mendefinisikan variable, kita bisa menyebutkan type dengan variableName: type.
Jika menetapkan nilai yang tidak sesuai dengan type annotation-nya, maka akan segera memunculkan error.

`const name: string = "Ninja Ken"
const age: number = 10
const isReady: boolean = true
const x: null = null
const y: undefined = undefined
const bigInt: bigint = BigInt("9007199254740992")
const symbol: symbol = Symbol("Ninja Ken")

// Error
const name: string = 7
const age: number = "10"
const isReady: boolean = "ready"`

Untuk nilai-nilai Array, kita bisa menyebutkan type berdasarkan nilai dalam sebuah Array:

`const array1: number[] = [1, 2, 3]
const array2: string[] = ["Ninja Ken", "Guru Domba"]
const array3: boolean[] = [true, false]`

Oh begitu! Untuk object bisakah dituliskan seperti berikut ini?
`const kenProfile: object = {name: "Ninja Ken", age: 12}`

Prediksi yang bagus, Ken. Bisa saja begitu, namun itu type annotation yang lemah sebab itu hanya memastikan bahwa nilainya adalah sebuah object. Untuk type annotation yang lebih baik, kita bisa menyebutkan property apa yang object tersebut miliki.

`const kenProfile: { name: string, age: number } = {
  name: 'Ninja Ken',
  age: 12,
}`

Kita pun bisa melakukan hal yang sama dengan "Type Aliase" atau "Interface" seperti berikut.
Ketika mendefinisikan sebuah aliase, tuliskan kata type di awal.

`type kenProfileType = { name: string, age: number }

const kenProfile: kenProfileType = {
  name: 'Ninja Ken',
  age: 12,
}`

Ketika menggunakan Interface, tuliskan kata interface di awal.
`interface kenProfileType {
  name: string
  age: number
}

const kenProfile: kenProfileType = {
  name: 'Ninja Ken',
  age: 12,
}`

Terdapat beberapa perbedaan di antara Type Aliase dan Interface, tapi dalam banyak kasus, keduanya berfungsi sama dan memang jadi kontroversi kapan menggunakan dan kapan menggunakan Interface.
Selanjutnya, mari pikirkan kasus dimana sebuah variable berisi nilai yang memiliki 2 (dua) type.

`let activeUser;

activeUser = "Ken"
activeUser = undefined
activeUser = "Guru Domba"`

Bayangkan kita menetapkan sebuah nama pengguna ke activeUser ketika terdapat pengguna yang active, namun berisi undefined ketika tidak terdapat pengguna yang active.
Dalam kasus ini, variable activeUser memiliki type yang bisa saja berupa string atau undefined dan ini bisa diwakili dalam TypeScript menggunakan dengan tulisan | seperti berikut ini. Ini disebut type Union.
`let activeUser: undefined | string;`

Kebanyakan dari type annotion untuk deklarasi variable sudah terbahas. Terakhir, akan kita simak penjelasan mengentai type "any".

Type any menerima nilai ber-type apapun seperti berikut ini:
`let x: any = 1
x = 'Ken'
x = true
x = {name: "Ken"}`

Dalam kebanyakan kasus, menggunakan any bukanlah pilihan yang bagus sebab menanggalkan keuntungan dari TypeScript. Itu merupakan cara terakhir ketika kita mendapati situasi dimana TypeScript tidak bisa menangani type dengan baik.

## Function
Untuk function, kita bisa menambahkan type annotation ke parameter dan nilai return dari sebuah function seperti berikut ini:

`const hello = (name: string): string => {
  return `Hello ${name}`
}`

Syntax dasarnya adalah:
`const functionName = (parameter: type) : returnValueType => {
  return ...
}`

Ketika tidak terdapat nilai return dalam sebuah function, maka type void bisa digunakan seperti ini:
`const hello = (name: string): void => {
  console.log('Hello ' + name)
}`

Selanjutnya, mari kita pikirkan kasus ketika kita menggunakan pernyataaan bersyarat dalam sebuah function dan nilai return-nya bisa berbeda type tergantung dari nilai dari parameter.

`const getRanking = (name: string, ranking?: number): string | number => {
  if (ranking === undefined) {
    return `You are not in the ranking.`
  } else {
    return ranking
  }
}`

Dalam code di atas, sebuah argument ranking diatur dan function menghasilkan ranking dari pengguna, namun katakan saja ada orang yang belum mendapatkan ranking sama sekali, maka argument untuk ranking tidak perlu diteruskan.
Ketika tidak yakin apakah sebuah parameter memiliki nilai atau tidak, kita bisa menambahkan tanda ? pada type annotion seperti ranking?: number.
Dan type Union pun bisa juga digunakan untuk function seperti yang diperlihatkan pada contoh di atas (string | number).

Mari kita perhatikan satu kasus lagi dimana kita ingin mengatur sebuah nilai default ketika sebuah argument tidak diteruskan ke sebuah function.

`const hello = (name: string = 'Guest'): string => {
  return `Hello, ${name}`
}

hello('Ninja Ken') // hasil: Hello, Ninja Ken

hello() // hasil: Hello, Guest`

Terakhir, perkenalkan type "literal". Ini bisa digunakan untuk variable juga namun seringnya digunakan dalam function.
Terdapat beberapa kasus dimana kita ingin membatasi nilai hanya pada nilai tertentu. Pertama, mari kita perhatikan contoh berikut.

`const findLocationInJakarta = (location: string): string => {
  return `Jakarta ${location}`
}

findLocationInJakarta('Utara') // hasil: Jakarta Utara

findLocationInJakarta('Selatan') // hasil: Jakarta Selatan

findLocationInJakarta('Ninja Ken') // hasil: Jakarta Ninja Ken`

Seperti yang terlihat, yang diharapkan adalah nilai yang diteruskan pada function berupa "Utara", "Timur", "Selatan" atau "Barat", namun nilai apapun bisa diteruskan pada function.
Untuk menyelesaikan permasalahan ini, kita bisa menggabungkan type Union dan type Literal.

`const findLocationInJakarta = (
  location: 'Utara' | 'Timur' | 'Selatan' | 'Barat',
): string => {
  return `Jakarta ${location}`
}

findLocationInJakarta('Utara')

findLocationInJakarta('Selatan')

findLocationInJakarta('Ninja Ken') // Error`

Dengan type Literal, kita bisa merujuk ke nilai string, angka atau boolean tertentu, seperti contoh di bawah ini.
`let x: 1
x = 1
x = 2  // Error`

Dengan menggabungkan type Literal dan type Union, kita bisa membuat daftar nilai-nilai yang mungkin dan memastikan bahwa nilai yang di teruskan ke function adalah salah satu dari nilai yang telah disebutkan dalam daftar tersebut.

`const findLocationInJakarta = (location: 'Utara' | 'Timur' | 'Selatan' | 'Barat') => {...}`
