docker build . -f react.dockerfile -t dofama && \
docker run -it --rm -v ${PWD}:/app -v dofama_nodemodules:/app/node_modules --network host dofama $@