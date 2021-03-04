test = e => {
  e.preventDefault();
  document.getElementById('text').innerHTML =
    document.getElementById('input').value;
};

document.getElementById('btn').addEventListener('click', test);
