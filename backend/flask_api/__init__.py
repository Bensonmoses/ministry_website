import logging
import azure.functions as func
from ..app import main

def run_function(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing request.')
    return main(req)
