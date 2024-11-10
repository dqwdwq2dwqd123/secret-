const compliments = [
    "You have a beautiful soul, Maria!",
    "YOUR EYES ARE SO AAAAAA",
    "YOUR LIPS ARE SOO AAAAAAA",
    "Your smile brightens my day every single time, Maria.",
    "You make everything better just by being there, Maria.",
    "You are so kind and thoughtful, Maria!",
    "You inspire me every day with your strength, Maria.",
    "You have a heart of gold, Maria.",
    "You make the world a better place, Maria.",
    "You are truly one of a kind, Maria!",
    "You are my favorite person in the world, Maria.",
    "You make my life complete, Maria.",
    "I am so lucky to have you as my wife, Maria.",
    "You are so thoughtful and caring, Maria.",
    "You always know how to make me smile, Maria.",
    "You are incredibly talented, Maria!",
    "Your kindness knows no bounds, Maria.",
    "You are so incredibly strong, Maria.",
    "You make challenges look so easy, Maria.",
    "You are my sunshine on a cloudy day, Maria.",
    "You are so full of love and compassion, Maria.",
    "You make everything feel better, Maria.",
    "Your positivity lights up my day, Maria.",
    "You are so supportive and understanding, Maria.",
    "Even the little things you do feel so special, Maria.",
    "You always go above and beyond, Maria.",
    "You are the best thing that has ever happened to me, Maria.",
    "Being with you is a gift, Maria.",
    "You make me feel so valued, Maria.",
    "You have a heart so big, Maria.",
    "You are always there when I need you, Maria.",
    "Your strength and resilience inspire me, Maria.",
    "You are thoughtful and kind in ways that amaze me, Maria.",
    "You’re a perfect balance of fun and responsibility, Maria.",
    "I am constantly in awe of you, Maria.",
    "You have such a warm and loving heart, Maria.",
    "You make my life brighter and better, Maria.",
    "You are so genuine and real, Maria.",
    "Your presence makes everything better, Maria.",
    "You handle challenges with such courage, Maria.",
    "I love you so much Maria.",
    "You make me want to be a better person, Maria.",
    "You bring so much joy into my life, Maria.",
    "You mean the world to me, Maria."
  ];
  
  
  
  function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").innerText = compliments[randomIndex];
  }
  