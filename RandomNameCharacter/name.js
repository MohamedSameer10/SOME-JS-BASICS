function random()
{
    let name = document.getElementById("user_name")

    let result = document.getElementById("random")

    let name_value =name.value

    let name_len = name_value.length

    let index = Math.floor(Math.random() * name_len)

    result.innerHTML = name_value.charAt(index)

}