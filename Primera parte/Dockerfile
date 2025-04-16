FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    wget \ 
    unzip \
    libx11-6 \
    libfreetype6 \
    libfontconfig1 \
    && rm -rf /var/lib/apt/lists/*

RUN wget https://github.com/godotengine/godot/releases/download/4.4-stable/Godot_v4.4-stable_linux.x86_64.zip -O /tmp/godot.zip \
    && unzip /tmp/godot.zip -d /usr/local/bin/ \
    && rm /tmp/godot.zip

CMD ["/usr/local/bin/Godot_v4.4-stable_linux.x86_64", "--headless"]

