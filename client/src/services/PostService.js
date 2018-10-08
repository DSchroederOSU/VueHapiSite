import Api from '@/services/Api'

export default {
  async fetchPosts () {
    const p = await Api().get('posts')
    return await splitArray(p.data, 3);
  }
}

// split array into chunks of (3) and push group to new array
// this is so the Vue component can make <row>'s' with columns dynamically
async function splitArray(arr, s) {
  let arrays = [], temp = [], size = s, count = 0;
  arr.forEach((e) => {
    if(count < 3){
      temp.push(e)
      count++
    }
    else{
      arrays.push(temp)
      temp = []
      temp.push(e)
      count = 1
    }
  })
  arrays.push(temp)
  return arrays
}
