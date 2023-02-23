function removeDiacritics(str) {
    str = str.replace(/Đ/g, "D");
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
console.log(removeDiacritics("A Ă Â B C D Đ E Ê G H I K L M N O Ô Ơ P Q R S T U Ư V X Y"));
                    // Output: A A A B C D D E E G H I K L M N O O O P Q R S T U U V X Y
