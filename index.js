function attempt(available, allowed, preffered) {
  result = []
  newResult = []
  for (i in available) { if ((result.length !== preffered.length) || preffered.includes('any'))  {
    if ((allowed.includes(available[i]) || allowed.includes('any')) && (preffered.includes(available[i]) || preffered.includes('any'))) {
      result.push(available[i])
      }
      else if 
        (allowed.includes(available[i]) && ((preffered.includes(available[i]) == false) || preffered.includes('any'))) {
      result.push(available[i])
      }
  }
  }
  if (result.length == 0) { return result } 
  else {
  for (i in result) {
    if (preffered.includes(result[i]) || preffered.includes('any')) {return result}
    else {
      newResult.push(Math.max.apply(null, result))
      return newResult
    }
  }
  }
}

available = [240, 360]
allowed = [240, 360]
preffered = [720, 1080]

attempt(available, allowed, preffered)